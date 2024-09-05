import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <div className='relative        '>
            <div className='absolute top-1  w-full  flex justify-between '>
                <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                <CiHeart className='text-2xl mr-1' />
            </div>
            <Link to="Details">
                <img src="/img/papaq.jpeg" alt="p" />
            </Link>
            <div className='pt-[10px]'>
                <p className="font-bold text-sm">Boss</p>
                <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                <p className='py-[10px]'>395</p>
            </div>
        </div>
    )
}

export default Card
