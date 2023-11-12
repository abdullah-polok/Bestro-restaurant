import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './RouterProvider/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
    <React.StrictMode>
      <HelmetProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </HelmetProvider>
    </React.StrictMode>
  </div>
)
