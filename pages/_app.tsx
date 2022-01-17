import React, { useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import { GlobalStyle } from '../lib/styles/GlobalStyle';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { wrapper } from '../lib/store/store';
import useGA from '../lib/hooks/useGA';
import useAuthObserver from '../lib/hooks/useAuthObserver';
//import '../lib/scripts/wdyr';

config.autoAddCss = false;

declare global {
    interface Window {
        gtag: any;
    }
}
const App = ({ Component, pageProps }) => {
    useGA();
    useAuthObserver();

    return (
        <>
            <GlobalStyle />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    );
};

export default wrapper.withRedux(App);
