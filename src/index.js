import ReactDOM from 'react-dom';
import React from 'react';
import GlobalStyle from './global/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
