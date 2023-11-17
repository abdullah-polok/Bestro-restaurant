import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from './Provider/AuthProvider';
import { router } from './RouterProvider/Routes';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='max-w-screen-xl mx-auto'>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <AuthProvider>
            <RouterProvider router={router}>
            </RouterProvider>
          </AuthProvider>
        </HelmetProvider>
      </QueryClientProvider>

    </React.StrictMode>
  </div>
)
