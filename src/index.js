import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {ProductContext} from "./Context/ProductContext"
import { CartProvider } from './Context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
  <ProductContext>
  <CartProvider>
   <App />
  </CartProvider>
  </ProductContext>

  </React.StrictMode>

);


