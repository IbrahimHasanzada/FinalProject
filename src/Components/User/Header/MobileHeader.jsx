import React, { useState } from 'react'
import { useGetAllCategoryQuery, useGetCategoryByIdQuery } from '../../../Store/EmporiumApi'
import { CiUser } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Loading from '../../Loading'
import { setCatId } from '../../../Store/CategoryIdSlice'

const MobileHeader = ({ mobile, setMobile }) => {
  const [catId, setCatid] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data: getAllCategories } = useGetAllCategoryQuery()
  const { data: getCatbyId, error, isLoading } = useGetCategoryByIdQuery(catId, { skip: !catId, })
  const userData = JSON.parse(localStorage.getItem('user'))
  const changeToUser = () => {
    if (userData) { navigate('/UserInformation') } else navigate('/Login')
    setMobile(false)
  }
  const filterByCategory = () => {
    dispatch(setCatId(`${catId}`))
    navigate({ pathname: 'categorypage/products/all', search: `?categoryId=${catId}` })
    setMobile(false)
  }
  const filterBySubCategory = (id, name) => {
    navigate({ pathname: '/products/all', search: `?subcategoryId=${id}` })
    localStorage.setItem('subcategory', name)
    setMobile(false)
  }
  return (
    <div className={`
            fixed z-10 top-[60px] bottom-0 bg-white h-[100vh] py-3 w-full 
            ${mobile ? 'left-0' : '-left-full'} duration-500`}>
      <section>
        <div className="px-5 flex  items-start  justify-end w-full ">
          <button onClick={() => changeToUser()} className="flex justify-center items-center border border-[#EAEAE6] py-2 px-3 h-12">
            <CiUser className="text-2xl " />
            <span className="text-md pl-2.5">{userData ? userData?.name : 'Sign in'}</span>
          </button>
        </div>
      </section>
      <section className='px-5 pt-5 pb-10 w-full flex justify-between items-start flex-col '>
        <ul className='flex w-full overflow-scroll -ml-4 mb-6'>
          {getAllCategories?.map((item, i) => (
            <li onClick={() => setCatid(item.id)} key={i} className='py-1 px-2 ml-[2px] text-nowrap mb-1  cursor-pointer rounded-[3px] hover:bg-[#e4e4e4]'>{item.name}</li>
          ))}
        </ul>
        {isLoading ?
          <Loading />
          :
          <div>
            <ul>
              {catId && <li onClick={filterByCategory} className='cursor-pointer'>{getCatbyId?.name} - Homepage</li> }
              {getCatbyId?.Subcategory.map((item, i) => (
                <li onClick={() => filterBySubCategory(item.id, item.name)} className='py-2 text-base cursor-pointer' key={i}>{item.name}</li>
              ))}
            </ul>
          </div>
        }
      </section>
    </div>
  )
}

export default MobileHeader
