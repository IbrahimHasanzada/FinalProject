import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TbEye, TbEyeOff } from 'react-icons/tb';
import { toast } from 'react-toastify';
import FormInput from '../Checkout/FormInput';
import { eGender } from '../../../Store/enum';
import { useUploadImageMutation, useUserUpdateMutation } from '../../../Store/EmporiumApi';
import { FaPen } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const userData = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const input = useRef()
    function showFileInput() {input.current.click()}
    const [image, setImage] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeat, setShowRepeat] = useState(false);
    const [sendImage, { data: getImages }] = useUploadImageMutation()
    const [updateUser, { data: getUserData, isError, isSuccess }] = useUserUpdateMutation()
    const toggleShowPassword = () => {setShowPassword(!showPassword)}
    const toggleRepeatPassword = () => {setShowRepeat(!showRepeat)}
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            const response = await sendImage(formData).unwrap();
            if (response.file && response.file.location) {
                setImage(response.file.location);
                toast.success('File uploaded successfully');
            }
        }
    }
    const validationSchema = Yup.object({
        first_name: Yup.string().required('First name is required'),
        mobile_number: Yup.string()
            .required('Mobile number is required')
            .matches(/^[0-9]{10,12}$/, 'Enter a valid mobile number'),
        password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
        repeat_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password')
    })
    return (
        <section className='wrapper flex flex-col items-center '>
            <div className='my-10 md:mb-10 md:mt-0 text-center w-full'>
                <h4 className='text-3xl md:text-4xl font-["Cormorant_Garamond",_serif]'>Update User Information</h4>
            </div>
            <Formik
                initialValues={{
                    first_name: userData?.user.name || '',
                    mobile_number: userData?.user.phone || '',
                    password: '',
                    repeat_password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    updateUser({
                        name: values.first_name,
                        username: values.last_name,
                        user_img: image,
                        email: values.email,
                        phone: values.mobile_number,
                        gender: values.gender,
                        password: values.password
                    }).unwrap().then(response => {
                        if (response.data) {
                            localStorage.setItem('user', JSON.stringify(response.data));
                            navigate('/')
                        }else{
                            toast.error('Invalid username or password!')
                        }
                    })
                    
                }}>
                {() => (
                    <Form className='w-full   md:max-w-4xl '>
                        <div className='w-full md:flex-row flex-col flex gap-10 md:gap-20'>
                            <div className='flex items-start justify-center'>
                                <div className='relative  w-52 h-52'>
                                    <img className="rounded-full w-full h-full object-cover" src={userData?.user.user_img} alt={userData?.user.id} />
                                    <button onClick={showFileInput} className="absolute right-3 bg-black text-white bottom-5 rounded-full p-2 border-4 border-white"><FaPen />
                                        <input ref={input} type="file" onChange={handleFileChange} className='hidden' />
                                    </button>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='flex md:flex-row flex-col md:gap-4 justify-between'>
                                    <div className='pt-5  w-full'>
                                        <FormInput type='text' name='first_name' label='Name' placeholder='Name' />
                                    </div>
                                </div>
                                <div className='flex md:flex-row flex-col md:gap-4 justify-between'>
                                    <div className='pt-5 w-full'>
                                        <FormInput type='text' name='mobile_number' label='Mobile number' placeholder='Mobile number' />
                                    </div>
                                </div>
                                <div className='flex md:flex-row flex-col md:gap-4 justify-between'>
                                    <div className='pt-5 w-full'>
                                        <div className='relative'>
                                            <FormInput type={showPassword ? 'text' : 'password'} name='password' label='New password' placeholder='Password' />
                                            <button
                                                type="button"
                                                className='absolute right-4 top-10'
                                                onClick={toggleShowPassword}>
                                                {showPassword ? <TbEyeOff className='text-xl' /> : <TbEye className='text-xl' />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className='pt-5 w-full'>
                                        <div className='relative'>
                                            <FormInput type={showPassword ? 'text' : 'password'} name='repeat_password' label='Repeat Password' placeholder='Repeat Password' />
                                            <button
                                                type="button"
                                                className='absolute right-4 top-10'
                                                onClick={toggleRepeatPassword}>
                                                {showPassword ? <TbEyeOff className='text-xl' /> : <TbEye className='text-xl' />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <button type='submit' className="mt-4 uppercase text-sm text-white bg-black h-11 w-full  flex justify-center items-center 
                        rounded-md hover:bg-transparent hover:text-black hover:border border-black duration-200">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default UpdateUser;
