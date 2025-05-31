import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom' ;
import App from './App';
import Reducer,{initialState} from './hooks/Reducer';
import { StateProvider } from './context/StateProvider';
import { CartProvider } from './context/cart_context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <StateProvider initialState={initialState} reducer={Reducer}> */}
      {/* <CartProvider> */}

        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </CartProvider> */}
      {/* </StateProvider> */}
  </React.StrictMode>
);


