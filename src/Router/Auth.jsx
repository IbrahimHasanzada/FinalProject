import React from 'react'
import AdminLogin from '../Pages/Dashboard/AdminLogin'

const Auth = ({children}) => {
    const token = localStorage.getItem('token')
  return (
    <>
         {token ? children : <AdminLogin />}
    </>
  )
}

export default Auth
