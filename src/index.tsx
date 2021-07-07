import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './Context/DBContext';
import { ModalProvider } from './Context/ModalContext';
import UserProvider from './Context/UserContext';
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

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <AppProvider
                contexts={[StateProvider, ModalProvider, UserProvider]}
            >
                <App />
            </AppProvider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
