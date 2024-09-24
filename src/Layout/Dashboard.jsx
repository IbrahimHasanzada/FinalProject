import React from 'react'
import AdminSidebar from '../Components/Admin/AdminSidebar'
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
      <div className='flex'>
        <AdminSidebar />
        <Outlet />
      </div>
  )
}

export default Dashboard
