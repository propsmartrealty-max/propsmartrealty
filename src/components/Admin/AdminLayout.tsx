
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Building2, HardHat, LogOut, Layout, MapPin, Phone, Image as ImageIcon } from 'lucide-react';

import { cloudflare } from '../../services/cloudflare';

const AdminLayout: React.FC<{ children: React.ReactNode, title: string }> = ({ children, title }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await cloudflare.auth.signOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
        navigate('/admin');
    };

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
        { icon: Building2, label: 'Projects', path: '/admin/projects' },
        { icon: HardHat, label: 'Builders', path: '/admin/builders' },
        { icon: Layout, label: 'Banners', path: '/admin/banners' },
        { icon: ImageIcon, label: 'Media Library', path: '/admin/media' },
        { icon: MapPin, label: 'Localities', path: '/admin/localities' },
        { icon: Phone, label: 'Leads', path: '/admin/leads' },
        { icon: LayoutDashboard, label: 'AI Seeder', path: '/admin/seed' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white fixed h-full hidden md:flex flex-col">
                <div className="p-6 border-b border-slate-800">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/images/propsmart-logo-white.svg" alt="PROPSMART REALTY" className="h-6 w-auto" />
                        <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded text-[10px] font-bold">CMS</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64">
                <header className="bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center sticky top-0 z-10">
                    <h2 className="text-xl font-bold text-slate-800">{title}</h2>
                    <div className="text-sm text-slate-500">
                        Welcome, Admin
                    </div>
                </header>

                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
