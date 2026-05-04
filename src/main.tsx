import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router";
import AuthProvider from './context/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import router from './routes/router';

const root=document.getElementById('root');
if(!root) throw new Error("Root element not found");

createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>,
)
