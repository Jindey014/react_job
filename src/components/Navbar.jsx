import React from 'react'
import Logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom' // we use Link instead of a tag because using Link does not reload the page like a does . Also href changes to to.
// We now change link to navlink because navlink is basically link wrapper that check if it is active or not ani hamro program ma active nav lai black background diyeko xa

const Navbar = () => {
  const activeLink = ({ isActive }) =>
    isActive
      ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

  return (
    <>
      <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* LOGO */}
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-10 w-auto" src={Logo} alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  React Jobs
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={activeLink}>
                    Home
                  </NavLink>
                  <NavLink to="/jobs" className={activeLink}>
                    Jobs
                  </NavLink>
                  <NavLink to="/add-job" className={activeLink}>
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
