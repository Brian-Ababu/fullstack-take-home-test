import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClientProvider from './ApolloClient';

ReactDOM.render(
    <React.StrictMode>
        <ApolloClientProvider>
            <App />
        </ApolloClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

