import React, { useState } from 'react'
import DeliveryForm from './DeliveryForm'
import { FaWhatsapp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setDelivery } from '../../Redux/DeliverySlice'
import { setDeliveryOrder } from '../../Redux/DeliveryOrderSlice'

const Delivery = () => {
    const { delivery } = useSelector(state => state.delivery)
    const {deliveryOrder} = useSelector(state => state.deliveryOrder)
    const dispatch = useDispatch()
    return (
        <div className='py-9 w-full flex flex-col items-start justify-start border-b font-["Montserrat",_sans-serif]'>
            <h4 className='text-xl leading-5 font-["Cormorant_Garamond",_serif]'>Select delivery methods</h4>
            <section className='w-full flex flex-col items-start justify-start py-8'>
                <div className='max-w-[420px] my-4'>
                    <button onClick={() => dispatch(setDelivery(false))} className={`px-4 py-3 mr-3 text-base ${!delivery ? 'bg-black text-white' : 'bg-transparent text-black border border-black'}`}>Delivery</button>
                    <button onClick={() => dispatch(setDelivery(true))} className={`px-4 py-3 text-base ${delivery ? 'bg-black text-white' : 'bg-transparent text-black border border-black'}`}>Pickup from the store</button>
                </div>
                <ul className={`w-full ${!delivery ? 'block' : 'hidden' }`}>
                    <li onClick={() => dispatch(setDeliveryOrder(false))} className='py-5 flex cursor-pointer'>
                        <div className='w-4 h-4 border-2 border-[#EAEAE6]  flex justify-center items-center  rounded-full mr-4'>
                            <div className={`w-2 h-2 rounded-full ${!deliveryOrder ? 'bg-black' : 'bg-white'}`}></div>
                        </div>
                        <div className='w-full'>
                            <div className='w-full flex justify-between items-center mb-4 text-sm uppercase'>
                                <p>Standart delivery</p>
                                <p>Free</p>
                            </div>
                            <div className='text-[#777] text-sm md:text-base'>
                                <span className='md:block'>Orders before 16:00 will be delivered on the same day.</span>
                                <span>After 16:00 will be delivered on next day.</span>
                            </div>
                        </div>
                    </li>
                    <li onClick={() => dispatch(setDeliveryOrder(true))} className='py-5 flex cursor-pointer'>
                        <div className='w-4 h-4 border-2 border-[#EAEAE6] flex justify-center items-center  rounded-full mr-4'>
                            <div className={`w-2 h-2  rounded-full ${deliveryOrder ? 'bg-black' : 'bg-white'}`}></div>
                        </div>
                        <div className='w-full'>
                            <div className='w-full flex justify-between items-center mb-4 text-sm uppercase'>
                                <p>Urgent delivery</p>
                                <p>15 azn</p>
                            </div>
                            <span className='text-[#777] text-sm md:text-base'>Order will now be prepared and sent you</span>
                        </div>
                    </li>
                </ul>
                <ul className={`border w-full flex-col md:flex-row ${delivery ? 'flex' : 'hidden'}`}>
                    <li className='md:w-[50%]'>
                        <div className='w-full'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.532901392334!2d49.85845051218719!3d40.37488037132731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d71b8e4c5b9%3A0xfe50781c5645b252!2sPort%20Baku%20Mall!5e0!3m2!1sen!2saz!4v1725289894904!5m2!1sen!2saz"
                                height={256}
                                width="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </li>
                    <li className='md:w-[50%] p-4'>
                        <h4 className='mb-5 text-xl font-bold font-["Cormorant_Garamond",_serif]'>Port Baku Mall</h4>
                        <div className='flex justify-between text-sm'>
                            <div>
                                <p className='py-2'>Store Adress</p>
                                <p className='text-[#777]'>153 Neftcilar Ave, AZ1001, Baku, Azerbaijan</p>
                            </div>
                            <div>
                                <p className='py-2'>Opening hours</p>
                                <p className='text-[#777]'>Monday-Sunday: 10am-10pm</p>
                            </div>
                        </div>
                    </li>

                </ul>
            </section>
            <section className='w-full'>
                <DeliveryForm />
            </section>
            <section className='mt-20 pt-3 border-t w-full text-center'>
                <h2 className='text-xl font-["Cormorant_Garamond",_serif]'>Need help?</h2>
                <div className='pt-5'>
                    <button className='my-2 px-5 uppercase flex items-center justify-center w-full h-[50px] border border-black rounded-sm hover:bg-black hover:text-white duration-200'>
                        <FaWhatsapp className="mr-4 text-3xl" />
                        <span className='uppercase'>Send us a message</span>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Delivery
