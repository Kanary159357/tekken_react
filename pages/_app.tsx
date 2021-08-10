import React from 'react';
import { StateProvider } from '../context/DBContext';
import { ModalProvider } from '../context/ModalContext';
import UserProvider from '../context/UserContext';
import MainLayout from '../layout/MainLayout';
import { GlobalStyle } from '../styles/GlobalStyle';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const AppProvider = ({
    contexts,
    children,
}: {
    contexts: any;
    children: any;
}) =>
    contexts.reduce(
        (prev: any, context: any) =>
            React.createElement(context, {
                children: prev,
            }),
        children
    );

const App = ({ Component, pageProps }) => (
    <AppProvider contexts={[StateProvider, ModalProvider, UserProvider]}>
        <GlobalStyle />
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    </AppProvider>
);

export default App;
