import React from 'react'
import AdminLogin from '../Pages/Dashboard/AdminLogin'
const Auth = ({children}) => {
    const userData = JSON.parse(localStorage.getItem('user'))
  return (
    <>
         {userData?.role === "ADMIN" ? children : <AdminLogin />}
    </>
  )
}

export default Auth
