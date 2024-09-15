import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
    const {name, description, price, images} = item
    return (
        <div className='relative max-w-80'>
            <div className='absolute top-1  w-full  flex justify-between '>
                <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                <CiHeart className='text-2xl mr-1' />
            </div>
            <Link  to="Details">
                <img className=' w-full h-[60%] md:h-[70%] ' src={images[0]} alt="p" />
            </Link>
            <div className='pt-[10px]'>
                <p className="font-bold text-sm">{name}</p>
                <p className='text-sm text-[#777]'>{description}</p>
                <p className='py-[10px]'>{price}</p>
            </div>
        </div>
    )
}

export default Card
