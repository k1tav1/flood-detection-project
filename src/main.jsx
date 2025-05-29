import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg-gray-900 text-white font-roboto min-h-screen">
      <App />
    </div>
  </React.StrictMode>
);