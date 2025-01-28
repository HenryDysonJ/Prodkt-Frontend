// import { init, setContext } from '@sentry/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./../src/init"

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
