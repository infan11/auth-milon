import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/HOme.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import Navbar from './Components/Navbar.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Order from './Components/Order.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import Profile from './Components/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
     {
      path: '/',
      element: <Home></Home>
     },
     {
      path: '//navbar',
      element: <Navbar></Navbar>
     },
     {
      path: '/register',
      element: <Register></Register>
     },
     {
      path: '/Login',
      element: <Login></Login>
     },
     {
      path:'/order',
      element:<PrivateRoute><Order></Order></PrivateRoute>
     },
     {
      path: '/profile',
      element:<PrivateRoute><Profile></Profile></PrivateRoute>
     }
    ]  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
)
