import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { Link, useNavigate } from 'react-router-dom'

const Card = ({ item }) => {
    const navigate = useNavigate()
    const { name, description, price, images, id, discount } = item
    return (
        <div className='relative h-[311px]  md:h-[476px] w-full  rounded-lg'>
            <div className={`absolute top-1  w-full  flex ${discount ? 'justify-between' : 'justify-end'} `}>
                {discount > 0 ? <span className=' bg-[#B5314A] px-4 ml-1 text-white rounded-md'>{discount}%</span> : ''}
                <CiHeart className='text-2xl mr-1' />
            </div>
            <Link to={`/Details/${id}`}>
                <img className='rounded-t-lg w-full h-[60%] object-contain md:h-[70%] ' src={images[0]} alt="p" />
            </Link>
            <div className='p-2.5 w-full'>
                <div className='h-14 mb-3 w-full' >
                    <p className="font-bold mb-3 text-md">{name.slice(0, 10)}...</p>
                    <p className='text-sm  text-[#777]'>{description.slice(0, 30)}...</p>
                </div>
                <p className='py-[10px]'>{price}</p>
            </div>
        </div>
    )
}

export default Card
