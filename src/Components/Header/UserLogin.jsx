import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TbEye, TbEyeOff } from "react-icons/tb";
import FormInput from '../Checkout/FormInput';
import { useState } from 'react';
import BlackButton from '../BlackButton';
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const validationSchema = Yup.object({
        mobile_number: Yup.string()
            .required('Mobile number is required')
            .matches(/^[0-9]{10,12}$/, 'Enter a valid mobile number'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });

    return (
        <div className='w-[330px] bg-white p-6 shadow-2xl'>
            <h2 className='pb-2 border-b text-2xl font-["Cormorant_Garamond",_serif]'>My profile</h2>

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
                                name='mobile_number'
                                label=''
                                placeholder='Mobile number'
                            />
                            <ErrorMessage name='mobile_number' component='div' className='text-red-500 text-sm' />
                        </div>
                        <div className='pt-4'>
                            <div className='relative'>
                                <FormInput
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    label=''
                                    placeholder='Password'
                                />
                                <button
                                    type="button"
                                    className='absolute right-4 top-3'
                                    onClick={togglePasswordVisibility}>
                                    {showPassword ? <TbEyeOff className='text-xl' /> : <TbEye className='text-xl' />}
                                </button>
                            </div>
                            <ErrorMessage name='password' component='div' className='text-red-500 text-sm' />
                        </div>
                        <button type='submit' className="mt-4 uppercase text-sm text-white bg-black h-11 w-full  flex justify-center items-center 
                        rounded-md hover:bg-transparent hover:text-black hover:border border-black duration-200">
                            Sign in
                        </button>
                        <div>
                            <button className='pt-3'>
                                <Link className='underline text-sm '>Forgot password?</Link>
                            </button>
                            <div className='mt-5 pt-3 border-t text-sm w-full text-center'>
                                <span>Don't have an account?</span>
                                <Link className='unerline ml-2 pt-3'>Register</Link>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserLogin;
