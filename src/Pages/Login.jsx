import React from 'react'
import UserLogin from '../Components/Header/UserLogin'

const SignIn = () => {
  const userLogin = true
  return (
    <div className='wrapper flex flex-col items-center'>
        <h2 className='text-4xl font-["Cormorant_Garamond",_serif]'>Login</h2>
        <div className='w-full md:w-[480px]'>
            <UserLogin userLogin={userLogin} />
        </div>
    </div>
  )
}

export default SignIn
