import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { useGetAllCategoryQuery, useGetCategoryByIdQuery } from '../../../Store/EmporiumApi'

const MobileHeader = ({ mobile, setMobile }) => {
  const [catId, setCatId] = useState('')
  const { data: getAllCategories } = useGetAllCategoryQuery()
  const { data: getCatbyId, error, isLoading } = useGetCategoryByIdQuery(catId, { skip: !catId, })
  return (
    <div className={`
            fixed z-10 top-[60px] bottom-0 bg-white h-[100vh] flex flex-col justify-between w-full 
            ${mobile ? 'left-0' : '-left-full'} duration-500`}>
      <section className='px-5 pt-5 pb-10 w-full flex justify-between items-start flex-col '>
        <ul className='flex w-full overflow-scroll -ml-4 mb-6'>
          {getAllCategories?.map((item, i) => (
            <li onClick={() => setCatId(item.id)} key={i} className='py-1 px-2 ml-[2px] text-nowrap mb-1  cursor-pointer rounded-[3px] hover:bg-[#e4e4e4]'>{item.name}</li>
          ))}
        </ul>
        <div>
          <ul>
            {getCatbyId?.Subcategory.map((item, i) => (
              <li className='py-2 text-sm' key={i}>{item.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default MobileHeader
