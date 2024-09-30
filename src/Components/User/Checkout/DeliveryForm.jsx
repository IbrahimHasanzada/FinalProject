import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import UnderlineButton from '../../UnderlineButton';
import { useNavigate } from 'react-router-dom';
import FormInput from './FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckout } from '../../../Store/CheckOutSlice';

const DeliveryForm = () => {
    const formReceiver = JSON.parse(localStorage.getItem('receiver'))
    console.log(formReceiver);

    const navigate = useNavigate();
    const [isGift, setIsGift] = useState(false);
    const handleCheckboxChange = () => setIsGift(!isGift);
    const { checkout } = useSelector(state => state.checkout)
    const { delivery } = useSelector(state => state.delivery)
    const dispatch = useDispatch()

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required('First name is required'),
        last_name: Yup.string().required('Last name is required').min(2, 'Last name must be at least 2 characters'),
        mobile_number: Yup.string().required('Mobile number is required').matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
        email: Yup.string().required('Email address is required').email('Invalid email address'),
        ...(!delivery && {
            address: Yup.string().required('Address is required'),
        }),
        ...(isGift && {
            firstName: Yup.string().required('Receiver first name is required'),
            lastName: Yup.string().required('Receiver last name is required'),
            mobile: Yup.string().required('Receiver mobile number is required').matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
            note: Yup.string(),
        }),
    });

    return (
        <Formik
            initialValues={{
                first_name: formReceiver?.first_name || '',
                last_name: formReceiver?.last_name || '',
                mobile_number: formReceiver?.mobile_number || '',
                email: formReceiver?.email || '',
                address: formReceiver?.address || '',
                firstName: '',
                lastName: '',
                mobile: '',
                note: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Form submitted:', values);
                dispatch(setCheckout(2))
                localStorage.setItem('receiver', JSON.stringify(values))
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className='py-9 font-["Montserrat",_sans-serif]'>
                        <h2 className='text-xl font-["Cormorant_Garamond",_serif]'>Delivery details</h2>
                        <section className='py-4'>
                            <div className='flex w-full'>
                                <div className='mr-4 w-[50%]'>
                                    <FormInput label='First name' name='first_name' type='text' placeholder='First name' />
                                </div>
                                <div className='w-[50%]'>
                                    <FormInput label='Last name' name='last_name' type='text' placeholder='Last name' />
                                </div>
                            </div>
                            <div className='flex w-full my-4'>
                                <div className='mr-4 w-[50%]'>
                                    <FormInput label='Mobile number' name='mobile_number' type='text' placeholder='Mobile number' />
                                </div>
                                <div className='w-[50%]'>
                                    <FormInput label='Email address' name='email' type='email' placeholder='Email' />
                                </div>
                            </div>
                            <div className={` w-full ${delivery ? 'hidden' : 'block'}`}>
                                <FormInput label='Address' name='address' type='text' placeholder='Address' />
                            </div>
                        </section>
                    </div>
                    <section className='py-4'>
                        <div>
                            <h2 className='text-xl font-["Cormorant_Garamond",_serif]'>Gift options</h2>
                            <p className='text-sm text-[#777] py-2'>Please make sure the delivery address belongs to the one receiving the gift</p>
                            <div className='flex items-center'>
                                <input
                                    className='w-[14px] h-[14px]'
                                    type="checkbox"
                                    onChange={handleCheckboxChange}
                                    checked={isGift}
                                />
                                <p className='text-sm px-3'>Send this order as a gift</p>
                            </div>
                        </div>
                        {isGift && (
                            <section>
                                <div className='flex w-full my-4'>
                                    <div className='mr-4 w-[50%]'>
                                        <FormInput label='Receiver first name' name='firstName' type='text' placeholder='Receiver first name' />
                                    </div>
                                    <div className='w-[50%]'>
                                        <FormInput label='Receiver last name' name='lastName' type='text' placeholder='Receiver last name' />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <FormInput label='Receiver mobile' name='mobile' type='text' placeholder='Receiver mobile' />
                                </div>
                                <div className='w-full my-4'>
                                    <label className='uppercase text-sm'>Note</label>
                                    <Field
                                        name="note"
                                        as="textarea"
                                        className="min-h-[100px] py-3 px-5 outline-none text-sm md:text-base w-full border mt-1"
                                        placeholder="Note"
                                    />
                                </div>
                            </section>
                        )}
                    </section>
                    <section className='w-full'>
                        <button type="submit" className='
                        h-11 w-full uppercase text-sm text-white bg-black flex justify-center items-center rounded-md 
                        hover:bg-transparent hover:text-black hover:border border-black duration-200'>
                            Proceed to payment
                        </button>
                        <button type="button" onClick={() => navigate('/Basket')} className='h-11 w-full pt-8'>
                            <UnderlineButton title='Back to shopping cart' />
                        </button>
                    </section>
                </Form>
            )}
        </Formik>
    );
}

export default DeliveryForm;
