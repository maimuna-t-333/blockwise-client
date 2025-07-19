import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from '../pages/Home/Home';
import Apartments from '../pages/Apartments/Apartments';
import Dashboard from '../pages/DashBoard/Dashboard';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import MainLayout from '../pages/Layout/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
    children:[
        {
            index:true,
            Component:MainLayout
        }
    ]
  },
  {
    path:'apartments',
    Component:Apartments
  },
  {
    path:'dashboard',
    Component:Dashboard
  },
  {
    path:'login',
    Component:Login
  },
  {
    path:'register',
    Component:Register
  }
]);

export default router;