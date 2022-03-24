import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { CartProvider } from './contexts/cart.context';


ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <App/>
    </CartProvider>
    
  </BrowserRouter>,
  document.getElementById('root')
);