import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import App from './common/app';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");

const root = createRoot(document.getElementById('root'));

// Use the same render method for both hydrate and initial render
// root[(rootElement.hasChildNodes() ? 'hydrate' : 'render')](<App />);
root[(rootElement.hasChildNodes() ? 'hydrate' : 'render')](
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

reportWebVitals();