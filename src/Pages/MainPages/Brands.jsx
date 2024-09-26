import React, { useEffect, useState } from 'react'
import BrandsSideBar from '../../Components/User/Brands/BrandsSideBar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoFilterSharp } from "react-icons/io5";
import { useGetCategoryByIdQuery, useFilterProductsQuery, useGetAllCategoryQuery } from '../../Store/EmporiumApi';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from 'react-redux';
import Card from '../../Components/Card';
import Loading from '../../Components/Loading';
const Brands = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { catId } = useSelector(state => state.catId)
    const [filter, setFilter] = useState(false)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState('')
    const { data: getCategoriesSub } = useGetCategoryByIdQuery(catId, { skip: !catId })
    const { data: getAllcategory } = useGetAllCategoryQuery()
    const [params, setParams] = useState(null);
    const subName = localStorage.getItem('subcategory')
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const fullQuery = searchParams.toString()
        fullQuery && setParams(fullQuery)
    }, [location])
    const { data: filteredData, isLoading } = useFilterProductsQuery(params, { skip: !params })
    const filterSubCategory = (id, name) => {
        navigate({ pathname: '/products/all', search: `?subcategoryId=${id}` })
        localStorage.setItem('subcategory', name)
    }
    const filterProducts = (i) => {
        // if (i < 1 || i > filteredData?.meta.totalPages) return
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('page', i)
        navigate({ pathname: '/products/all', search: `?${searchParams.toString()}` })
        setPage(i)
    }
    return (
        <div>
            <div className='wrapper font-["Montserrat",_sans-serif]'>
                {isLoading ?
                    <Loading />

                    :
                    <>
                        <div className='w-full mt-8 mb-12 flex flex-col items-center text-center '>
                            <h1 className='text-5xl mb-7 font-["Cormorant_Garamond",_serif]'>{subName}</h1>
                            <ul className='flex w-full items-center flex-wrap flex-row justify-center'>
                                {getCategoriesSub?.Subcategory.map((item, i) => (
                                    <li onClick={() => filterSubCategory(item.id, item.name)} key={i} className='px-3'>
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
                            <div className='w-full'>
                                <div className=' pt-4'>
                                    <div className='w-full  grid grid-cols-2 xs:grid-cols-3 xl:grid-cols-4  gap-10'>
                                        {filteredData?.data.map((item, i) => (
                                            <Card item={item} key={i} />
                                        ))}
                                    </div>
                                </div>
                                <div className='mt-6 w-full flex justify-center items-center'>
                                    <ul className='flex'>
                                        <li onClick={() => filterProducts(page - 1)} className={`min-w-10 px-2.5 py-2 m-1 flex justify-center items-center cursor-pointer ${page <= 1 ? 'opacity-50 pointer-events-none' : ''}`} >
                                            <IoIosArrowBack /> Previous
                                        </li>
                                        {[...Array(filteredData?.meta.totalPages)].map((_, i) => (
                                            <li key={i} onClick={() => filterProducts(i + 1)} className={`min-w-10 text-black leading-5 flex justify-center items-center px-2.5 py-2 m-1 border border-[#F1F1F1] cursor-pointer ${i + 1 === page ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                                {i + 1}
                                            </li>
                                        ))}
                                        <li className={`min-w-10 px-2.5 py-2 m-1 flex justify-center items-center cursor-pointer ${page >= filteredData?.meta.totalPages ? 'opacity-50 pointer-events-none' : ''}`} onClick={() => filterProducts(page + 1)} >
                                            Next <IoIosArrowForward />
                                        </li>
                                    </ul>
                                </div>



                            </div>
                        </section></>

                }
            </div>
        </div>
    )
}

export default Brands
