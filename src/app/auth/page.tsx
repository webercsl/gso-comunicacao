import dynamic from 'next/dynamic';

const AuthScreen = dynamic(() => import('@/features/auth/components/auth-screen').then(mod => mod.AuthScreen), { ssr: false });

const AuthPage = () => {
    return <AuthScreen />;
}

export default AuthPage;