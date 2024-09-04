import React from 'react'
import DiscountSlider from './DiscountSlider'

const DiscountProducts = () => {
    return (
        <div>
            <div className='mb-10 font-["Cormorant_Garamond",_serif]'>
                {/* <h2 className='text-9xl leading-[.8] font-extralight'>D</h2> */}
                <h2 className='text-3xl md:text-5xl flex flex-col justify-start  font-medium '>
                    <span className='mb-1 ml-2'>Discover Our</span>
                    <span className='ml-2'>Discounted Products!</span>
                </h2>
            </div>
            <DiscountSlider />
        </div>
    )
}

export default DiscountProducts
