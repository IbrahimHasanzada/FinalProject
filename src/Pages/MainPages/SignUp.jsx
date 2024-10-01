import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import FormInput from '../../Components/User/Checkout/FormInput';
import { TbEye, TbEyeOff } from 'react-icons/tb';
import BlackButton from '../../Components/BlackButton';
import { useRegisterUserMutation, useUploadImageMutation } from '../../Store/EmporiumApi';
import { eGender } from '../../Store/enum';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const [registerUser, { data: getUserData }] = useRegisterUserMutation()
    const [sendImage, { data: getImages }] = useUploadImageMutation()
    // const [image, setImage] = useState('')
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    // const handleFileChange = async (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const formData = new FormData();
    //         formData.append('image', file);
    //         setImage(file);
    //         const response = await sendImage(formData).unwrap();
    //         if (response.file && response.file.location) {
    //             // setFormDataInput(prev => ({ ...prev, image: response.file.location }));
    //             toast.success('File uploaded successfully');
    //         }
    //     }
    // }

    const validationSchema = Yup.object({
        first_name: Yup.string().required('First name is required'),
        last_name: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        mobile_number: Yup.string()
            .required('Mobile number is required')
            .matches(/^[0-9]{10,12}$/, 'Enter a valid mobile number'),
        gender: Yup.string().required('Gender is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        repeat_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Please confirm your password')
    })
    return (
        <section className='wrapper flex flex-col items-center'>
            <Helmet>
                <title>Tradium | Register</title>
                <meta name="description" content="Register Page" />
            </Helmet>
            <div className='mb-10 text-center w-full'>
                <h4 className='text-4xl font-["Cormorant_Garamond",_serif]'>Signup</h4>
            </div>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email: '',
                    mobile_number: '',
                    gender: '',
                    password: '',
                    repeat_password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    registerUser({
                        name: values.first_name,
                        username: values.last_name,
                        email: values.email,
                        phone: values.mobile_number,
                        gender: values.gender,
                        password: values.password
                    }).unwrap().then((data) => {
                        toast.success('User registered successfully')
                        navigate('/login')
                    }).catch((error) => {
                        console.error('Error:', error.status === 400 ? toast.error('Username already taken!') : toast.error('Failed to register user'));
                    });
                }}>
                {() => (
                    <Form className='w-full md:w-[480px] '>
                        <div className='pt-5'>
                            <FormInput type='text' name='first_name' label='Name' placeholder='Name' />
                        </div>
                        <div className='pt-5'>
                            <FormInput type='text' name='last_name' label='Username' placeholder='Username' />
                        </div>
                        <div className='pt-5'>
                            <FormInput type='email' name='email' label='Email' placeholder='Email' />
                        </div>
                        <div className='pt-5'>
                            <FormInput type='text' name='mobile_number' label='Mobile number' placeholder='Mobile number' />
                        </div>
                        <div className='pt-5 w-full bg-white'>
                            <label htmlFor="gender">Gender</label>
                            <div className="w-full border  border-gray-300 rounded px-5">
                                <Field as="select" name="gender" className="h-11 w-full" >
                                    <option value="">Select Gender</option>
                                    {eGender.map((item, i) => (
                                        <option key={i} value={item}>{item}</option>
                                    ))}
                                </Field>
                            </div>
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
                            <BlackButton path='/login' title='Sign in' className="w-full text-2xl" />
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default SignUp;
