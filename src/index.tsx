import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import Form from './components/form/form';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);