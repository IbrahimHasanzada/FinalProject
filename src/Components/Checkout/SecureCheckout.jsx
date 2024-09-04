import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SecureCheckout = () => {
    const { checkout } = useSelector(state => state.checkout)
    const dispatch = useDispatch()
    return (
        <div className='w-full font-["Montserrat",_sans-serif]'>
            <h2 className='text-xl text-center leading-6'>Secure Checkout</h2>
            <div className='w-full grid grid-cols-3'>
                <div className='relative pt-6'>
                    <div className='w-11 h-11 rounded-full mx-auto flex items-center justify-center border border-black'>
                        <span className='text-center font-medium'>1</span>
                    </div>
                    <p className='text-center font-medium py-2'>Delivery</p>
                    <div className={`absolute top-[46px] h-[1px] border left-[50%] right-0 ml-[26px] ${checkout > 1 ? 'border-black' : 'border'}`}></div>
                </div>
                <div className='relative pt-6'>
                    <div className={`w-11 h-11 rounded-full mx-auto flex items-center justify-center border ${checkout > 1 ? 'border-black' : 'border'}`}>
                        <span className='text-center font-medium'>2</span>
                    </div>
                    <p className='text-center font-medium py-2'>Review & Pay</p>
                    <div className={`absolute top-[46px] h-[1px] border right-[50%] left-0  mr-[26px] ${checkout > 1 ? 'border-black' : 'border'}`}></div>
                    <div className={`absolute top-[46px] h-[1px] border left-[50%] right-0  ml-[26px] ${checkout > 2 ? 'border-black' : 'border'}`}></div>
                </div>
                <div className='relative pt-6'>
                    <div className={`w-11 h-11 rounded-full mx-auto flex items-center justify-center border ${checkout === 3 ? 'border-black' : 'border'}`}>
                        <span className='text-center font-medium'>3</span>
                    </div>
                    <p className='text-center font-medium py-2'>Complete</p>
                    <div className={`absolute top-[46px] h-[1px] border right-[50%] left-0  mr-[26px] ${checkout === 3 ? 'border-black' : 'border'}`}></div>
                </div>
            </div>
        </div>
    )
}

export default SecureCheckout
