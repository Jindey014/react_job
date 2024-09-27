import React from 'react'

import { Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import SingleJobPage, { jobLoader } from './pages/SingleJobPage'
import PageNotFound from './pages/PageNotFound'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'

const App = () => {
  //ADD NEW JOBS --THIS IS AN EXAMPLE OF PASSING A FUNCTION AS A PROP
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
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return
  }
  //UPDATE JOB
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
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
          element: <SingleJobPage deleteJobSubmit={deleteJob} />,
          loader: jobLoader,
        },
        {
          path: '/add-job',
          element: <AddJobPage addJobSubmit={addJob} />,
        },
        {
          path: '/edit-job/:id',
          element: <EditJobPage updateJobSubmit={updateJob} />,
          loader: jobLoader,
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
