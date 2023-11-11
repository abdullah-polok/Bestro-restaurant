import React from 'react'
import ReactDOM from 'react-dom/client'
import {

  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './RouterProvider/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
    </React.StrictMode>
  </div>
)
