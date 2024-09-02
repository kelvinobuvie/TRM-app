import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className='app-container'>
        <Sidebar />
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout