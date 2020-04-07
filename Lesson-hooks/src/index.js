import React from 'react';
import ReactDOM from 'react-dom';
import AuthContextProvider from './context/auth-context';

import './index.css';
import App from './App';


ReactDOM.render(
  <AuthContextProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </AuthContextProvider>,
  document.getElementById('root')
);
