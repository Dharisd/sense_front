import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard';
import RequestForm from "./pages/request_form";
import HomePage from "./pages/homepage";
import Login from './pages/login';
import Navbar from './components/nav';
import Gallery from './pages/gallery';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "join",
    element: <RequestForm />,

  },
  {
    path: "gallery",
    element: <Gallery />,

  },
  {
    path: "dash",
    element: <Dashboard />,

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
