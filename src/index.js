import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './custom.scss';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Menu from './components/menu/menu';
import RowOfTubes from './components/row-of-test-tubes/row-of-test-tubes';
import ReagentBottle from './components/Reagent-bottle/reagent';
import router from './router';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
