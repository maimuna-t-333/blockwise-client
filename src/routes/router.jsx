import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from '../pages/Home/Home';
import Apartments from '../pages/Apartments/Apartments';
import Dashboard from '../pages/DashBoard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
    children:[
        {

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
  }
]);

export default router;