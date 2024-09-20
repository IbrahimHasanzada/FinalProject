import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TbEye, TbEyeOff } from "react-icons/tb";
import FormInput from '../Checkout/FormInput';
import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../Store/UserLoginSlice';
import { useLoginMutation } from '../../../Store/EmporiumApi';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const UserLogin = ({ userLogin }) => {
    const userData = JSON.parse(localStorage.getItem('user'))
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => { setShowPassword(!showPassword) }
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login, { data: userInformation, isSuccess, isError }] = useLoginMutation()
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('First name is required'),
        login_password: Yup.string()
            .required('Password is required')
            .min(5, 'Password must be at least 6 characters')
    })
    return (
        <div className={`bg-white p-6 ${userLogin ? 'w-full' : 'w-[330px] shadow-2xl'}`}>
            <ToastContainer />
            {!userLogin && <h2 className='pb-2 border-b text-2xl font-["Cormorant_Garamond",_serif]'>My profile</h2>}
            <Formik
                initialValues={{ username: '', login_password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    login({ username: values.username, password: values.login_password })
                        .then(response => {
                            if (response.data) {
                                console.log(response);
                                
                                    localStorage.setItem('user', JSON.stringify(response.data.user));
                                    localStorage.setItem('token', response.data.token);
                                    dispatch(setUser())
                                    navigate('/')
                            }else{
                                toast.error('Invalid username or password!')
                            }
                        })
                }}>
                {() => (
                    <Form>
                        <div className='pt-4'>
                            <FormInput
                                type='text'
                                name='username'
                                label={`${userLogin ? 'Username' : ''}`}
                                placeholder='Username'
                            />
                        </div>
                        <div className='pt-4'>
                            <div className='relative'>
                                <FormInput
                                    type={showPassword ? 'text' : 'password'}
                                    name='login_password'
                                    label={`${userLogin ? 'Password' : ''}`}
                                    placeholder='Password'
                                />
                                <button
                                    type="button"
                                    className={`absolute right-4 ${userLogin ? 'top-10' : 'top-3'}`}
                                    onClick={togglePasswordVisibility}>
                                    {showPassword ? <TbEyeOff className='text-xl' /> : <TbEye className='text-xl' />}
                                </button>
                            </div>
                        </div>
                        <button type='submit' className='mt-4 uppercase text-sm text-white bg-black h-11 w-full  flex justify-center items-center 
                        rounded-md hover:bg-transparent hover:text-black hover:border border-black duration-200'>
                            Sign in
                        </button>
                        <div>
                            <button className='pt-3 font-["Cormorant_Garamond",_serif]'>
                                <Link className='underline text-base '>Forgot password?</Link>
                            </button>
                            <div className={`mt-5 pt-3 border-t w-full text-center flex ${userLogin ? 'flex-col text-2xl' : 'flex-row text-base'}`}>
                                <span className={`inline-block font-["Cormorant_Garamond",_serif] ${userLogin ? 'pb-5' : ''}`}>Don't have an account?</span>
                                <div className={`${userLogin ? 'w-full' : ''}`}>
                                    {userLogin ?
                                        <button onClick={() => navigate('/SignUp')} className='uppercase text-sm text-white bg-black h-11 w-full  flex justify-center items-center 
                                            rounded-md hover:bg-transparent hover:text-black hover:border border-black duration-200'>Create new account</button>
                                        : <button onClick={() => dispatch(setUser())}>
                                            <Link to='SignUp' className='underline ml-2 pt-3 font-["Cormorant_Garamond",_serif]'>Register</Link>
                                        </button>}
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UserLogin
