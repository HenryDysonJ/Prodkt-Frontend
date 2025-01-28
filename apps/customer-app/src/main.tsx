// import { init, setContext } from '@sentry/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./../src/init"

import App from './App';

// const isProd = import.meta.env.PROD;

// if (isProd) {
//   init({
//     dsn: <dsn key>
//   });
//   setContext('extra', {
//     product: 'clinical',
//     environment: import.meta.env.MODE,
//   });
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
