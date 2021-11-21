import ReactDOM from 'react-dom';
import React from 'react';
import GlobalStyle from './global/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
