import React, { useEffect } from 'react';
import { StateProvider } from '../context/DBContext';
import { ModalProvider } from '../context/ModalContext';
import UserProvider from '../context/UserContext';
import MainLayout from '../layout/MainLayout';
import { GlobalStyle } from '../styles/GlobalStyle';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { useRouter } from 'next/dist/client/router';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const AppProvider = ({
    contexts,
    children,
}: {
    contexts: any;
    children: any;
}) =>
    contexts.reduce(
        (prev: any, context: any) => React.createElement(context, {}, prev),
        children
    );
declare global {
    interface Window {
        gtag: any;
    }
}

const App = ({ Component, pageProps }) => {
    const router = useRouter();

    const handleRouteChange = (url: URL) => {
        window.gtag('config', '[Tracking ID]', {
            page_path: url,
        });
    };

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <AppProvider contexts={[StateProvider, ModalProvider, UserProvider]}>
            <GlobalStyle />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </AppProvider>
    );
};

export default App;
