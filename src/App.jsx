import React from 'react'

import { Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import SingleJobPage, { jobLoader } from './pages/SingleJobPage'
import PageNotFound from './pages/PageNotFound'
import AddJobPage from './pages/AddJobPage'

const App = () => {
  //ADD NEW JOBS
  const addJob = async (newJob) => {
    const res = await fetch('api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
  }

  //DELETE JOB
  const deleteJob = async (id) => {
    console.log('delete', id)
  }

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
          element: <JobsPage />,
        },
        {
          path: '/jobs/:id',
          element: <SingleJobPage deleteJob={deleteJob} />,
          loader: jobLoader,
        },
        {
          path: '/add-job',
          element: <AddJobPage addJobSubmit={addJob} />,
        },
        {
          path: '*',
          element: <PageNotFound />,
        },
      ],
    },
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App
