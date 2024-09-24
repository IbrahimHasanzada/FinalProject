import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetAllCategoryQuery } from '../../../Store/EmporiumApi';
import { useDispatch } from 'react-redux';
import { setCatId } from '../../../Store/CategoryIdSlice';

const HeadSection = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { data: getAllCategories } = useGetAllCategoryQuery()
    const filterByCategory = (id) => {
        dispatch(setCatId(id))
        navigate({ pathname: 'CategoryPage/products/all', search: `?categoryId=${id}` })

    };
    return (
        <section className='relative'>
            <div className='w-full h-[60vh] md:h-[80vh] overflow-hidden group'>
                <img
                    className=' object-cover md:object-left-top md:w-full h-full transform  transition-transform duration-500 group-hover:scale-110'
                    src="/img/qadin.jpg" alt="kisi" />
            </div>
            <div className='absolute bottom-[3%] left-0 right-0 max-w-[500px] mx-auto text-center font-["Cormorant_Garamond",_serif]'>
                <h1 className='text-3xl md:text-5xl mb-4  text-white'>New Now</h1>
                <div className='my-4 font-["Montserrat",_sans-serif] flex justify-center items-center flex-col md:flex-row'>
                    {getAllCategories && getAllCategories.slice(0, 2).map((item, i) => (
                        <button onClick={() => filterByCategory(item.id)} className="relative w-[80%] group bg-transparent border-2 text-white border-white px-6 py-4 m-2 inline-block min-w-[190px] font-medium overflow-hidden">
                            <span className='relative z-10 group-hover:text-black duration-300'>{item.name}</span>
                            <div className='absolute inset-0 h-full w-0 bg-transparent group-hover:bg-white group-hover:w-full transition-all duration-500 ease-in-out'></div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HeadSection
