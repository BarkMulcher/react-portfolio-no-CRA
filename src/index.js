import React from 'react';
import * as ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// import './styles/styles.css';
// import './styles/mobile.css';
import App from './App';
import styled from 'styled-components';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.querySelector('#root');

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: red
`;

const Wrapper = styled.section`
padding: 2em;
background: blue
`;

const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <Wrapper>
            <Title>
                <App />
            </Title>
        </Wrapper>
    </React.StrictMode>);

ServiceWorkerRegistration.register();

reportWebVitals();