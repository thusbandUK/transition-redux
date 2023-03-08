import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { RouterProvider } from "react-router-dom";
import router from './router';
import store from './app/store';
import { ParallaxProvider } from 'react-scroll-parallax';


//it went Provider / routerProvider / /Provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider 
    store={store}
    >
      <ParallaxProvider>
    <RouterProvider 
    router={router}
    
    />
    </ParallaxProvider>
    </Provider>
    </React.StrictMode>
      
  
);


//from line 16: 
//from line 25: 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
