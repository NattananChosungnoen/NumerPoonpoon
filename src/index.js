import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bisection from './rootofequation/Bisection';
import Newtonrap from './rootofequation/Newtonrap';
import Secant from './rootofequation/Secant';
import Cramer from './linearalgebra/Cramerrule';
import Gauss from './linearalgebra/Gauss';
import Sidel from './linearalgebra/Sidel';
import Regression from './interpolation/Regres';
import Lagrange from './interpolation/Lagrange';
import Polynomial from './interpolation/Polynomial';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "bisection",
    element: <Bisection/>,
  },
  {
    path: "newton",
    element: <Newtonrap/>,
  },
  {
    path: "secant",
    element: <Secant/>,
  },
  {
    path: "cramer",
    element: <Cramer/>,
  },
  {
    path: "gauss",
    element: <Gauss/>,
  },
  {
    path: "sidel",
    element: <Sidel/>,
  },
  {
    path: "regres",
    element: <Regression/>,
  },
  {
    path: "lagrange",
    element: <Lagrange/>,
  },
  {
    path: "Polynomial",
    element: <Polynomial/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={router}/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
