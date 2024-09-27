import React, { useEffect, useState } from 'react'
import SecureCheckout from '../../Components/User/Checkout/SecureCheckout'
import Delivery from '../../Components/User/Checkout/Delivery'
import { useSelector } from 'react-redux'
import DeliveryDetails from '../../Components/User/Checkout/DeliveryDetails'
import OrderSummary from '../../Components/User/Basket/OrderSummary'
import BasketProducts from '../../Components/User/Basket/BasketProducts'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useGetAllCartQuery } from '../../Store/EmporiumApi'
import Loading from '../../Components/Loading'
import { Helmet } from 'react-helmet-async'

const CheckOut = () => {
    const [showSummary, setShowSummary] = useState(false)
    const { checkout } = useSelector(state => state.checkout)
    const { data: getAllBasketData, isLoading } = useGetAllCartQuery();
    const totalPrice = getAllBasketData?.reduce((acc, item) => acc + item.product_id.price, 0);
    const check = true
    useEffect(() => {
        localStorage.setItem('payment', checkout);
    }, [checkout])
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
    console.log(totalPrice);

    return (
        <div className='wrapper font-["Montserrat",_sans-serif]'>
            <Helmet>
                <title>Emporium | Checkout</title>
                <meta name="description" content="Checkout Page" />
            </Helmet>
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
                        <div className='h-full w-full overflow-y-auto my-4'>
                            {isLoading ?
                                <Loading /> :
                                <>
                                    {getAllBasketData?.map((product, productIndex) => (
                                        <BasketProducts key={productIndex} check={check} product={product} />
                                    ))}
                                </>
                            }
                        </div>
                        <div className='w-full py-1'>
                            <OrderSummary checkout={checkout} />
                        </div>
                    </div>
                    <div className={`lg:hidden bg-[#F7F7F2] px-4 ${showSummary ? 'hidden' : 'flex '}`}>
                        <div className='py-4 w-full flex justify-between items-center'>
                            <div className='flex flex-row items-center justify-start'>
                                {getAllBasketData?.slice(0, 2).map((item, i) => (
                                    <img key={i} src={item.product_id.images[0]} alt={`img-${i}`} className='w-16 h-20 mr-3' />
                                ))}
                                <div>
                                    <span className='rounded-sm bg-black text-white py-[1px] px-2'>+ {getAllBasketData?.slice(2).length}</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-end'>
                                <button className='mb-6' onClick={() => setShowSummary(true)}><IoIosArrowUp className='text-lg' /></button>
                                <div className='uppercase text-sm leading-4'>
                                    <h2>Subtotal</h2>
                                    <span className='text-[#777]'>{totalPrice} $</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default CheckOut
