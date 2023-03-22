import React from 'react';
import * as ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// import './styles/styles.css';
// import './styles/mobile.css';
import App from './App';

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
                <App />
    </React.StrictMode>);

// ServiceWorkerRegistration.register();

reportWebVitals();