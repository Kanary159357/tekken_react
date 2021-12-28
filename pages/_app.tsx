import React, { useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import { GlobalStyle } from '../styles/GlobalStyle';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { wrapper } from '../store/store';
import useGA from '../hooks/useGA';
import useAuthObserver from '../hooks/useAuthObserver';
import '../scripts/wdyr';

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
