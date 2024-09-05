import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TbEye, TbEyeOff } from "react-icons/tb";
import FormInput from '../Checkout/FormInput';
import { useState } from 'react';
import BlackButton from '../BlackButton';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../Redux/UserLoginSlice';

const UserLogin = ({ userLogin }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {setShowPassword(!showPassword);}
    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const validationSchema = Yup.object({
        mobile_number: Yup.string()
            .required('Mobile number is required')
            .matches(/^[0-9]{10,12}$/, 'Enter a valid mobile number'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });

    return (
        <div className={`bg-white p-6 ${userLogin ? 'w-full' : 'w-[330px] shadow-2xl'}`}>
            {!userLogin && <h2 className='pb-2 border-b text-2xl font-["Cormorant_Garamond",_serif]'>My profile</h2>}
            <Formik
                initialValues={{ mobile_number: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form>
                        <div className='pt-4'>
                            <FormInput
                                type='text'
                                name='login_mobile_number'
                                label={`${userLogin ? 'Mobile number' : ''}`}
                                placeholder='Mobile number'
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
                                <button className={`${userLogin ? 'w-full' : ''}`} onClick={() => dispatch(setUser(false))}>
                                    {userLogin ?
                                        <button onClick={() => navigate('/SignUp')}  className='uppercase text-sm text-white bg-black h-11 w-full  flex justify-center items-center 
                                            rounded-md hover:bg-transparent hover:text-black hover:border border-black duration-200'>Create new account</button>
                                        : <Link to='SignUp' className='underline ml-2 pt-3 font-["Cormorant_Garamond",_serif]'>Register</Link>}
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserLogin;
