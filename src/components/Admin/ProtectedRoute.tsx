import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { cloudflare } from '../../services/cloudflare';
import { Loader2 } from 'lucide-react';

const ProtectedRoute = () => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await cloudflare.auth.getSession();
            setAuthenticated(!!session);
            setLoading(false);
        };

        checkAuth();

        const { data: { subscription } } = cloudflare.auth.onAuthStateChange((_event, session) => {
            setAuthenticated(!!session);
            setLoading(false);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    if (loading) {
        return (
            <div className="h-screen w-full flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
        );
    }

    return authenticated ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;
