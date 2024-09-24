import React from 'react'

import { Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import PageNotFound from './pages/PageNotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/jobs',
        element: <JobPage />,
      },
      {
        path: '/add-job',
        element: <AddJobPage />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
