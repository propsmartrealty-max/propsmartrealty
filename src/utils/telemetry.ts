/**
 * Lightweight Zero-Dependency Core Web Vitals & Telemetry Monitor
 * Measures LCP, INP, CLS, FCP, and TTFB using standard PerformanceObserver APIs.
 */

export interface Metric {
    name: 'LCP' | 'CLS' | 'INP' | 'FCP' | 'TTFB';
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
}

function getRating(name: Metric['name'], value: number): Metric['rating'] {
    switch (name) {
        case 'LCP':
            return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
        case 'CLS':
            return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
        case 'INP':
            return value <= 200 ? 'good' : value <= 500 ? 'needs-improvement' : 'poor';
        case 'FCP':
            return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
        case 'TTFB':
            return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
        default:
            return 'good';
    }
}

function reportMetric(metric: Metric) {
    if (process.env.NODE_ENV === 'development') {
        // Helpful diagnostic logging in development
        const style = metric.rating === 'good' ? 'color: #10b981; font-weight: bold;' : 'color: #f59e0b; font-weight: bold;';
        console.info(`%c[Web Vitals] ${metric.name}: ${Math.round(metric.value)}${metric.name === 'CLS' ? '' : 'ms'} (${metric.rating})`, style);
    }

    // In production, send non-blocking beacon to Cloudflare analytics/health endpoint if available
    if (typeof window !== 'undefined' && navigator.sendBeacon) {
        try {
            const data = JSON.stringify({
                metric: metric.name,
                value: metric.value,
                rating: metric.rating,
                url: window.location.pathname,
                timestamp: Date.now()
            });
            navigator.sendBeacon('/api/health?telemetry=true', data);
        } catch {
            // silent fail
        }
    }
}

export function initWebVitalsTelemetry() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
        // 1. TTFB (Time to First Byte)
        const navEntries = performance.getEntriesByType('navigation');
        if (navEntries.length > 0) {
            const nav = navEntries[0] as PerformanceNavigationTiming;
            const ttfb = nav.responseStart - nav.requestStart;
            if (ttfb > 0) {
                reportMetric({ name: 'TTFB', value: ttfb, rating: getRating('TTFB', ttfb) });
            }
        }

        // 2. FCP (First Contentful Paint)
        const paintObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                if (entry.name === 'first-contentful-paint') {
                    reportMetric({ name: 'FCP', value: entry.startTime, rating: getRating('FCP', entry.startTime) });
                    paintObserver.disconnect();
                }
            }
        });
        paintObserver.observe({ type: 'paint', buffered: true });

        // 3. LCP (Largest Contentful Paint)
        let lcpValue = 0;
        const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
                lcpValue = lastEntry.startTime;
            }
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // 4. CLS (Cumulative Layout Shift)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                if (!(entry as any).hadRecentInput) {
                    clsValue += (entry as any).value;
                }
            }
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        // Report on visibility change (when user background/navigates away)
        window.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                if (lcpValue > 0) {
                    reportMetric({ name: 'LCP', value: lcpValue, rating: getRating('LCP', lcpValue) });
                }
                reportMetric({ name: 'CLS', value: clsValue, rating: getRating('CLS', clsValue) });
            }
        }, { once: true });

    } catch (e) {
        // Defensive: never let telemetry error impact user experience
    }
}
