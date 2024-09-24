import React from 'react'
import MainCard from './MainCard'
import { useGetAllCategoryQuery } from '../../../Store/EmporiumApi';

const MainSection = () => {
    const {data: getAllCategories} = useGetAllCategoryQuery()
    console.log(getAllCategories);
    
    
    return (
        <div>
            <div className='mt-10'>
                <div className='flex items-center'>
                    <div className='h-[1px] w-full border-t border-[#EAEAE6]'></div>
                    <h1 className='w-full whitespace-nowrap text-center px-4 text-[2em] font-["Cormorant_Garamond",_serif]'>Choose a department</h1>
                    <div className='h-[1px] w-full border-t border-[#EAEAE6]'></div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5  py-4 md:pt-10 '>
                {getAllCategories?.slice(2).map((item, i) => (
                    <MainCard key={i} item={item} />
                ))}
            </div>
        </div>
    )
}

export default MainSection
