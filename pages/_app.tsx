import React from 'react';
import { StateProvider } from '../context/DBContext';
import { ModalProvider } from '../context/ModalContext';
import UserProvider from '../context/UserContext';
import MainLayout from '../layout/MainLayout';
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
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    </AppProvider>
);

export default App;
