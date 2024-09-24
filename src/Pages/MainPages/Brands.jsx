import React, { useEffect, useState } from 'react'
import BrandsSideBar from '../../Components/User/Brands/BrandsSideBar'
import { Link, useLocation, useParams } from 'react-router-dom'
import { IoFilterSharp } from "react-icons/io5";
import { useGetCategoryByIdQuery, useFilterProductsQuery } from '../../Store/EmporiumApi';
import { useSelector } from 'react-redux';
import Card from '../../Components/Card';
const Brands = () => {
    const location = useLocation()
    const { catId } = useSelector(state => state.catId)
    const [filter, setFilter] = useState(false)
    const { data: getCategoriesSub } = useGetCategoryByIdQuery(catId, { skip: !catId })
    const [params, setParams] = useState(null);
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const fullQuery = searchParams.toString()
        fullQuery && setParams(fullQuery)
    }, [location])
    const { data: filteredData } = useFilterProductsQuery(params, { skip: !params })
    return (
        <div>
            <div className='wrapper font-["Montserrat",_sans-serif]'>
                <div className='w-full mt-8 mb-12 flex flex-col items-center text-center '>
                    <h1 className='text-5xl mb-7 font-["Cormorant_Garamond",_serif]'>Ayaqqabılar </h1>
                    <ul className='flex w-full items-center flex-wrap flex-row justify-center'>
                        {getCategoriesSub?.Subcategory.map((item, i) => (
                            <li key={i} className='px-3'>
                                <Link className='underline font-medium'>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <section className='w-full flex justify-between px-5 mb-4'>
                    <div>{filteredData?.data.length} products</div>
                    <button onClick={() => { setFilter(true) }} className='flex items-center lg:hidden'>
                        <IoFilterSharp className='text-2xl mr-2' />
                        <span className='uppercase text-sm'>filters</span>
                    </button>
                </section>
                <section className='flex w-full gap-5 mt-5'>
                    <div className={`lg:pl-5 fixed lg:sticky duration-300 bg-white z-40 lg:z-30  top-0 lg:top-32 w-full  h-full lg:w-96 ${filter ? 'right-0' : '-right-full'}`}>
                        <BrandsSideBar filter={filter} setFilter={setFilter} />
                    </div>
                    <div className=' pt-4'>
                        {/* Card sections */}
                        <div className='w-full  grid grid-cols-2 xs:grid-cols-3 xl:grid-cols-4  gap-10'>
                            {filteredData?.data.map((item, i) => (
                                <Card item={item} key={i} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Brands
