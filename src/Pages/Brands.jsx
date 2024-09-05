import React, { useState } from 'react'
import BrandsSideBar from '../Components/Brands/BrandsSideBar'
import { Link } from 'react-router-dom'
import { CiHeart } from 'react-icons/ci'
import { IoFilterSharp } from "react-icons/io5";
const Brands = () => {

    const [filter, setFilter] = useState(false)

    return (
        <div>
            <div className='wrapper mx-auto font-["Montserrat",_sans-serif]'>
                <div className='w-full mt-8 mb-12 flex flex-col items-center text-center '>
                    <h1 className='text-5xl mb-7 font-["Cormorant_Garamond",_serif]'>Ayaqqabılar </h1>
                    <ul className='flex w-full items-center flex-wrap flex-row justify-center'>
                        <li className='px-3 '>
                            <Link className='underline font-medium'>
                                Geyimler
                            </Link>
                        </li>
                        <li className='px-3 border-black border-l'>
                            <Link className='underline font-medium'>
                                Ayaqqabilar
                            </Link>
                        </li>
                        <li className='px-3 border-black border-l'>
                            <Link className='underline font-medium'>
                                Cantalar
                            </Link>
                        </li>
                        <li className='px-3 border-black border-l'>
                            <Link className='underline font-medium'>
                                Saatlar
                            </Link>
                        </li>
                        <li className='px-3 border-black border-l'>
                            <Link className='underline font-medium'>
                                Aksesuarlar
                            </Link>
                        </li>
                    </ul>
                </div>
                <section className='w-full flex justify-between mb-4'>
                    <div>1935 products</div>
                    <button onClick={() => {setFilter(true)}} className='flex items-center lg:hidden'>
                        <IoFilterSharp className='text-2xl mr-2' />
                        <span className='uppercase text-sm'>filters</span>
                    </button>
                </section>
                <section className='flex gap-5 mt-5'>
                    <div className={`fixed lg:sticky duration-300 bg-white z-40 lg:z-30  top-0 lg:top-32 w-full h-full lg:w-96 ${filter ? 'right-0' : '-right-full'}`}>
                        <BrandsSideBar filter={filter} setFilter={setFilter} />
                    </div>
                    <div className=' pt-4'>

                        {/* Card sections */}

                        <div className='w-full grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-3 2xl:grid-cols-4  gap-4 '>
                            <div className='relative '>
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
                            <div className='relative '>
                                <div className='absolute top-1  w-full  flex justify-between '>
                                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                                    <CiHeart className='text-2xl mr-1' />
                                </div>
                                <Link>
                                    <img src="/img/papaq.jpeg" alt="p" />
                                </Link>
                                <div className='pt-[10px]'>
                                    <p className="font-bold text-sm">Boss</p>
                                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                                    <p className='py-[10px]'>395</p>
                                </div>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-1  w-full  flex justify-between '>
                                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                                    <CiHeart className='text-2xl mr-1' />
                                </div>
                                <Link>
                                    <img src="/img/papaq.jpeg" alt="p" />
                                </Link>
                                <div className='pt-[10px]'>
                                    <p className="font-bold text-sm">Boss</p>
                                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                                    <p className='py-[10px]'>395</p>
                                </div>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-1  w-full  flex justify-between '>
                                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                                    <CiHeart className='text-2xl mr-1' />
                                </div>
                                <Link>
                                    <img src="/img/papaq.jpeg" alt="p" />
                                </Link>
                                <div className='pt-[10px]'>
                                    <p className="font-bold text-sm">Boss</p>
                                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                                    <p className='py-[10px]'>395</p>
                                </div>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-1  w-full  flex justify-between '>
                                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                                    <CiHeart className='text-2xl mr-1' />
                                </div>
                                <Link>
                                    <img src="/img/papaq.jpeg" alt="p" />
                                </Link>
                                <div className='pt-[10px]'>
                                    <p className="font-bold text-sm">Boss</p>
                                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                                    <p className='py-[10px]'>395</p>
                                </div>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-1  w-full  flex justify-between '>
                                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                                    <CiHeart className='text-2xl mr-1' />
                                </div>
                                <Link>
                                    <img src="/img/papaq.jpeg" alt="p" />
                                </Link>
                                <div className='pt-[10px]'>
                                    <p className="font-bold text-sm">Boss</p>
                                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                                    <p className='py-[10px]'>395</p>
                                </div>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-1  w-full  flex justify-between '>
                                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                                    <CiHeart className='text-2xl mr-1' />
                                </div>
                                <Link>
                                    <img src="/img/papaq.jpeg" alt="p" />
                                </Link>
                                <div className='pt-[10px]'>
                                    <p className="font-bold text-sm">Boss</p>
                                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                                    <p className='py-[10px]'>395</p>
                                </div>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-1  w-full  flex justify-between '>
                                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                                    <CiHeart className='text-2xl mr-1' />
                                </div>
                                <Link>
                                    <img src="/img/papaq.jpeg" alt="p" />
                                </Link>
                                <div className='pt-[10px]'>
                                    <p className="font-bold text-sm">Boss</p>
                                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                                    <p className='py-[10px]'>395</p>
                                </div>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-1  w-full  flex justify-between '>
                                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                                    <CiHeart className='text-2xl mr-1' />
                                </div>
                                <Link>
                                    <img src="/img/papaq.jpeg" alt="p" />
                                </Link>
                                <div className='pt-[10px]'>
                                    <p className="font-bold text-sm">Boss</p>
                                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                                    <p className='py-[10px]'>395</p>
                                </div>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-1  w-full  flex justify-between '>
                                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                                    <CiHeart className='text-2xl mr-1' />
                                </div>
                                <Link>
                                    <img src="/img/papaq.jpeg" alt="p" />
                                </Link>
                                <div className='pt-[10px]'>
                                    <p className="font-bold text-sm">Boss</p>
                                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                                    <p className='py-[10px]'>395</p>
                                </div>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-1  w-full  flex justify-between '>
                                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                                    <CiHeart className='text-2xl mr-1' />
                                </div>
                                <Link>
                                    <img src="/img/papaq.jpeg" alt="p" />
                                </Link>
                                <div className='pt-[10px]'>
                                    <p className="font-bold text-sm">Boss</p>
                                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                                    <p className='py-[10px]'>395</p>
                                </div>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-1  w-full  flex justify-between '>
                                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                                    <CiHeart className='text-2xl mr-1' />
                                </div>
                                <Link>
                                    <img src="/img/papaq.jpeg" alt="p" />
                                </Link>
                                <div className='pt-[10px]'>
                                    <p className="font-bold text-sm">Boss</p>
                                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                                    <p className='py-[10px]'>395</p>
                                </div>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-1  w-full  flex justify-between '>
                                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                                    <CiHeart className='text-2xl mr-1' />
                                </div>
                                <Link>
                                    <img src="/img/papaq.jpeg" alt="p" />
                                </Link>
                                <div className='pt-[10px]'>
                                    <p className="font-bold text-sm">Boss</p>
                                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                                    <p className='py-[10px]'>395</p>
                                </div>
                            </div>
                            <div className='relative '>
                                <div className='absolute top-1  w-full  flex justify-between '>
                                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                                    <CiHeart className='text-2xl mr-1' />
                                </div>
                                <Link>
                                    <img src="/img/papaq.jpeg" alt="p" />
                                </Link>
                                <div className='pt-[10px]'>
                                    <p className="font-bold text-sm">Boss</p>
                                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                                    <p className='py-[10px]'>395</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Brands