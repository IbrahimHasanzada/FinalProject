import React, { useState } from 'react'
import BasketProducts from '../Components/Basket/BasketProducts'
import OrderSummary from '../Components/Basket/OrderSummary'
const Basket = () => {
    const [addToCard, setAddToCard] = useState(true)
    return (
        <div className='wrapper'>
            <div className='mb-4 '>
                <h2 className='text-3xl md:text-5xl font-["Cormorant_Garamond",_serif]'>Shopping bag</h2>
                <p className='mt-2 font-["Montserrat",_sans-serif]'>7 items</p>
            </div>
            <section className='w-full flex md:flex-row flex-col items-start justify-start'>
                <section className='w-full mt-5'>
                    <BasketProducts addToCard={addToCard} />
                </section>
                <section className='w-full h-full md:w-[30%] md:ml-12  md:sticky md:top-32'>
                    <OrderSummary addToCard={addToCard} />
                </section>
            </section>
        </div>
    )
}

export default Basket
