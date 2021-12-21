import React, { useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import { GlobalStyle } from '../styles/GlobalStyle';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { wrapper } from '../store/store';
import useGA from '../hooks/useGA';
import useAuthObserver from '../hooks/useAuthObserver';

config.autoAddCss = false;

declare global {
    interface Window {
        gtag: any;
    }
}
const App = ({ Component, pageProps }) => {
    const [queryClient] = React.useState(() => new QueryClient());
    useGA();
    useAuthObserver();

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <GlobalStyle />
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Hydrate>
        </QueryClientProvider>
    );
};

export default wrapper.withRedux(App);
