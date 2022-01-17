import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

declare global {
    interface Window {
        gtag: any;
    }
}
const useGA = () => {
    const router = useRouter();
    const handleRouteChange = (url: URL) => {
        window.gtag('config', `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`, {
            page_path: url,
        });
    };
    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
};

export default useGA;
