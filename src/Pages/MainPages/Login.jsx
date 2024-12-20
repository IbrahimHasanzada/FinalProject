import { Helmet } from 'react-helmet-async'
import UserLogin from '../../Components/User/Header/UserLogin'

const SignIn = () => {
  const userLogin = true
  return (
    <div className='wrapper flex flex-col items-center'>
      <Helmet>
        <title>Tradium | Login</title>
        <meta name="description" content="Login Page" />
      </Helmet>
      <h2 className='text-4xl font-["Cormorant_Garamond",_serif]'>Login</h2>
      <div className='w-full md:w-[480px]'>
        <UserLogin userLogin={userLogin} />
      </div>
    </div>
  )
}

export default SignIn
