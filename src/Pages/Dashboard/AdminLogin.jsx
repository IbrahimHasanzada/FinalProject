import { Formik, Form } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup'
import FormInput from '../../Components/User/Checkout/FormInput';
import { TbEye, TbEyeOff } from 'react-icons/tb';
import { useLoginMutation } from '../../Store/EmporiumApi';
import { toast } from 'react-toastify';
const AdminLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => { setShowPassword(!showPassword) }
    const [login, { isError }] = useLoginMutation()
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('First name is required'),
        login_password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    })
    return (
        <Formik
            initialValues={{ username: '', login_password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                login({ username: values.username, password: values.login_password })
                    .then(response => {
                        response.data && localStorage.setItem('user', JSON.stringify(response.data.user));
                        response.data && localStorage.setItem('token', response.data.token);
                        if (response) {
                            if (response.data && response.data.user.role === "ADMIN") {
                                window.location.reload();
                            } else if (response.error && response.error.status === 401) {
                                toast.error('Invalid username or password!');
                            } else {
                                toast.error('An unexpected error occurred.');
                            }
                        }
                    })
            }}>
            {() => (
                <Form>
                    <div className='wrapper h-[100vh] flex justify-center items-center flex-col'>
                        <h1 className='text-4xl font-medium'>Sign in</h1>
                        <div className='w-[480px] '>
                            <div className='pt-4 w-full'>
                                <FormInput type='text' name='username' label='Username' placeholder='Username' />
                            </div>
                            <div className='pt-4 w-full'>
                                <div className='relative'>
                                    <FormInput type={showPassword ? 'text' : 'password'} name='login_password' label='Password' placeholder='Password'
                                    />
                                    <button
                                        type="button"
                                        className={`absolute right-4  top-10`}
                                        onClick={togglePasswordVisibility}>
                                        {showPassword ? <TbEyeOff className='text-xl' /> : <TbEye className='text-xl' />}
                                    </button>
                                </div>
                            </div>
                            <button type='submit' className='mt-4 uppercase text-sm text-white bg-black h-11 w-full  flex justify-center items-center 
                        rounded-md hover:bg-transparent hover:text-black hover:border border-black duration-200'>
                                Sign in
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default AdminLogin
