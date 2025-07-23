import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from '../pages/Home/Home';
import Apartments from '../pages/Apartments/Apartments';
// import Dashboard from '../pages/DashBoard/Dashboard';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import MainLayout from '../pages/Layout/MainLayout';
import DashboardLayout from '../pages/Layout/DashboardLayOut';
import PrivateRoute from './Privateroute';
import Profile from '../pages/DashBoard/Profile';
import Announcement from '../pages/DashBoard/Announcement';
import RoleRoute from './RoleRoute';
import MemberProfile from '../pages/DashBoard/MemberProfile';
import MakePayment from '../pages/DashBoard/MakePayment';
import PaymentHistory from '../pages/DashBoard/PaymentHistory';
import AdminProfile from '../pages/DashBoard/AdminProfile';
import ManageMembers from '../pages/DashBoard/ManageMembers';
import MakeAnnouncement from '../pages/DashBoard/MakeAnnouncement';
// import AgreementAnnouncement from '../pages/DashBoard/AgreementAnnouncement';
import AgreementRequests from '../pages/DashBoard/AgreementRequests';
import ManageCoupon from '../pages/DashBoard/ManageCoupon';

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
    path:'dashboard/user',
    element: <PrivateRoute><RoleRoute allowedRole="user"><DashboardLayout></DashboardLayout></RoleRoute></PrivateRoute>,
    children:[
        {
            path:'profile',
            Component:Profile
        },
        {
            path:'announcements',
            Component:Announcement
        }
    ]
  },
  {
    path:'dashboard/member',
    element:<PrivateRoute><RoleRoute allowedRole="member"><DashboardLayout></DashboardLayout></RoleRoute></PrivateRoute>,
    children:[
        {
            path:'profile',
            Component:MemberProfile
        },
        {
            path:'payment',
            Component:MakePayment
        },
        {
            path:'history',
            Component:PaymentHistory
        },
        {
            path:'announcements',
            Component:Announcement
        }
    ]
  },
  {
path:'dashboard/admin',
element:<PrivateRoute><RoleRoute allowedRole="admin"><DashboardLayout></DashboardLayout></RoleRoute></PrivateRoute>,
children:[
    {
        path:'profile',
        Component:AdminProfile
    },
    {
        path:'members',
        Component:ManageMembers
    },
    {
        path:'announcements',
        Component:MakeAnnouncement
    },
    {
        path:'requests',
        Component:AgreementRequests
    },
    {
        path:'coupons',
        Component:ManageCoupon
    }
]
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