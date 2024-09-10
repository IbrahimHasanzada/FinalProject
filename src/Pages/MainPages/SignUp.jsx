import React, { useState } from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import FormInput from '../../Components/Checkout/FormInput';
import { TbEye, TbEyeOff } from 'react-icons/tb';
import BlackButton from '../../Components/BlackButton';
import { useRegisterUserMutation } from '../../Store/EmporiumApi';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [registerUser, { data: getUserData }] = useRegisterUserMutation()
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const validationSchema = Yup.object({
        first_name: Yup.string().required('First name is required'),
        last_name: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        mobile_number: Yup.string()
            .required('Mobile number is required')
            .matches(/^[0-9]{10,12}$/, 'Enter a valid mobile number'),
        date: Yup.date().required('Birthday is required'),
        gender: Yup.string().required('Gender is required'),
        address: Yup.string().required('Address is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        repeat_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Please confirm your password')
    });

    return (
        <section className='wrapper flex flex-col items-center'>
            <div className='mb-10 text-center w-full'>
                <h4 className='text-4xl font-["Cormorant_Garamond",_serif]'>Signup</h4>
            </div>

            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '',
                    mobile_number: '',
                    date: '',
                    gender: '',
                    address: '',
                    password: '',
                    repeat_password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                    registerUser({
                        name: values.first_name,
                        username: values.last_name,
                        email: values.email,
                        phone: values.mobile_number,
                        address: values.address,
                        dob: values.date.toISOString(),
                        gender: values.gender,
                        password: values.password
                    })
                    console.log(getUserData);
                    
                }}
            >
                {() => (
                    <Form className='w-full md:w-[480px] '>
                        <div className='pt-5'>
                            <FormInput type='text' name='first_name' label='First name' placeholder='First name' />
                        </div>
                        <div className='pt-5'>
                            <FormInput type='text' name='last_name' label='Last name' placeholder='Last name' />
                        </div>
                        <div className='pt-5'>
                            <FormInput type='email' name='email' label='Email' placeholder='Email' />
                        </div>
                        <div className='pt-5'>
                            <FormInput type='text' name='mobile_number' label='Mobile number' placeholder='Mobile number' />
                        </div>
                        <div className='pt-5'>
                            <FormInput type='date' name='date' label='Birthday' placeholder='Birthday' />
                        </div>
                        <div className='pt-5 w-full bg-white'>
                            <label htmlFor="gender">Gender</label>
                            <div className="w-full border  border-gray-300 rounded px-5">
                                <Field as="select" name="gender" className="h-11 w-full" >
                                    <option value="">Select Gender</option>
                                    <option value="male">MALE</option>
                                    <option value="female">Female</option>
                                </Field>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <FormInput type='text' name='address' label='Address' placeholder='Address' />
                        </div>
                        <div className=' pt-5'>
                            <div className='relative'>
                                <FormInput type={showPassword ? 'text' : 'password'} name='password' label='Password' placeholder='Password' />
                                <button
                                    type="button"
                                    className='absolute right-4 top-10'
                                    onClick={togglePasswordVisibility}>
                                    {showPassword ? <TbEyeOff className='text-xl' /> : <TbEye className='text-xl' />}
                                </button>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <div className='relative'>
                                <FormInput type={showPassword ? 'text' : 'password'} name='repeat_password' label='Repeat Password' placeholder='Repeat Password' />
                                <button
                                    type="button"
                                    className='absolute right-4 top-10'
                                    onClick={togglePasswordVisibility}>
                                    {showPassword ? <TbEyeOff className='text-xl' /> : <TbEye className='text-xl' />}
                                </button>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <div className='flex items-start'>
                                <input type="checkbox" />
                                <p className='px-3 text-sm text-[#777]'>By registering, your account will be subjected to the Terms & Conditions and Privacy Policy</p>
                            </div>
                            <button type='submit' className="mt-4 uppercase text-sm text-white bg-black h-11 w-full  flex justify-center items-center 
                        rounded-md hover:bg-transparent hover:text-black hover:border border-black duration-200">
                                Register
                            </button>
                        </div>
                        <div className='mt-16 pt-4 border-t w-full'>
                            <h2 className='text-xl pb-5 font-["Cormorant_Garamond",_serif]'>Already have an account?</h2>
                            <BlackButton path='/Login' title='Sign in' className="w-full text-2xl" />
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default SignUp;
