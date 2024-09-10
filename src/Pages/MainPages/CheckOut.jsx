import React, { useEffect, useState } from 'react'
import SecureCheckout from '../../Components/Checkout/SecureCheckout'
import Delivery from '../../Components/Checkout/Delivery'
import { useDispatch, useSelector } from 'react-redux'
import DeliveryDetails from '../../Components/Checkout/DeliveryDetails'
import OrderSummary from '../../Components/Basket/OrderSummary'
import BasketProducts from '../../Components/Basket/BasketProducts'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const CheckOut = () => {
    const [showSummary, setShowSummary] = useState(false)
    const { checkout } = useSelector(state => state.checkout)
    const dispatch = useDispatch()
    useEffect(() => {
        localStorage.setItem('payment', checkout);
    }, [checkout])
    const imgExample = ['basketexample1.jpeg', 'basketexample1.jpeg']

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setShowSummary(true)
            } else {
                setShowSummary(false)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div className='wrapper font-["Montserrat",_sans-serif]'>
            <section className='py-6 flex flex-col lg:flex-row'>
                <div className='w-full lg:w-[70%]'>
                    <div>
                        <SecureCheckout />
                    </div>
                    <div>
                        {checkout === 1 ? <Delivery /> : checkout === 2 ? <DeliveryDetails /> : ''}
                    </div>
                </div>
                <div className={`w-full lg:w-[368px] lg:h-[85vh] lg:ml-10 z-20 sticky left-0 right-0 bottom-0 lg:top-36 ${showSummary ? 'h-[85vh]' : 'max-h-60'}`}>
                    <div className={`lg:flex justify-between items-start px-4 bg-[#F7F7F2] h-full flex-col ${showSummary ? 'flex' : 'hidden'}`}>
                        <div className='pt-8 pb-4 border-b w-full flex justify-between items-center'>
                            <span className={`text-lg font-["Cormorant_Garamond",_serif] ${showSummary ? 'block' : 'hidden'}`}>Order summary</span>
                            <div className='block lg:hidden'>
                                <button onClick={() => setShowSummary(false)}><IoIosArrowDown /></button>
                            </div>
                        </div>
                        <div className='h-full w-full xl:px-5 overflow-y-auto my-4'>
                            <BasketProducts />
                        </div>
                        <div className='w-full py-1'>
                            <OrderSummary checkout={checkout} />
                        </div>
                    </div>
                    <div className={`lg:hidden bg-[#F7F7F2] px-4 ${showSummary ? 'hidden' : 'flex '}`}>
                        <div className='py-4 w-full flex justify-between items-center'>
                            <div className='flex flex-row items-center justify-start'>
                                {imgExample.map((img, i) => (
                                    <img key={i} src={`/img/${img}`} alt={`img-${i}`} className='w-16 h-20 mr-3' />
                                ))}
                                <div>
                                    <span className='rounded-sm bg-black text-white py-[1px] px-2'>+ {imgExample.length + 5}</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-end'>
                                <button className='mb-6' onClick={() => setShowSummary(true)}><IoIosArrowUp className='text-lg' /></button>
                                <div className='uppercase text-sm leading-4'>
                                    <h2>subtotal</h2>
                                    <span className='font-medium mt-1 inline-block'>1207 azn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CheckOut
