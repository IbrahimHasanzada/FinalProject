import { Link, useLocation, useNavigate } from 'react-router-dom'
import CategorySlider from '../../Components/CategorySlider'
import UnderlineButton from '../../Components/UnderlineButton'
import { useFilterProductsQuery, useGetCategoryByIdQuery } from '../../Store/EmporiumApi'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, CircularProgress } from '@mui/material'
import Loading from '../../Components/Loading'
import { Helmet } from 'react-helmet-async'
const CategoryPage = () => {
    const { catId } = useSelector(state => state.catId);
    const location = useLocation()
    const navigate = useNavigate()
    const [params, setParams] = useState(null);
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const fullQuery = searchParams.toString()
        fullQuery && setParams(fullQuery)
    }, [location])
    const { data: getCategoriesById, isLoading } = useGetCategoryByIdQuery(catId, { skip: !catId })
    const { data: filteredData } = useFilterProductsQuery(params, { skip: !params })
    const filterBySubCategory = (id) => {
        navigate({ pathname: '/products/all', search: `?subcategoryId=${id}` })
    }
    const category = [
        {
            name: 'Women',
            img: '0609main-banner-desktop.jpg'
        },
        {
            name: 'Men',
            img: 'kisi_1.jpg'
        },
        {
            name: 'Kids',
            img: 'kidsCategory.jpg'
        },
        {
            name: 'Jewellery',
            img: 'jewelleryCategory.jpg'
        },
        {
            name: 'Beauty',
            img: 'beautyCategory.jpg'
        },
        {
            name: 'Home',
            img: 'homeCategory.jpg'
        }
    ]
    const SubCategorySection = [
        {
            name: 'Women',
            img: ['0609triple-banner-1-.gif', '0609triple-banner-2.jpg', '0609triple-banner-3-.gif']
        },
        {
            name: 'Men',
            img: ['24triple-man-1_.jpg', '24triple-man-2.gif', '24triple-man-3.jpg']
        },
        {
            name: 'Kids',
            img: ['24triple-kids-banner-1.jpg', '24triple-kids-banner-2.jpg', '24triple-kids-banner-3.jpg']
        },
        {
            name: 'Jewellery',
            img: ['24triple-jewelry-1.jpg', 'jewellery_triple_banner_2.jpg', 'jewellery_triple_banner_3.jpg']
        },
        {
            name: 'Beauty',
            img: ['24triple-banner-beauty-1.jpg', '24triple-beauty-2.jpg', '24triple-banner-3.jpg']
        },
        {
            name: 'Home',
            img: ['24triple-home-11.jpg', '24triple-home-2.jpg', '24triple-home-12.jpg']
        }
    ]

    return (
        <div className='wrapper font-["Montserrat",_sans-serif]'>
            <Helmet>
                <title>Tradium | {`${getCategoriesById ?  getCategoriesById?.name : ''}`}</title>
                <meta name="description" content="Category Page" />
            </Helmet>
            {isLoading ?
                <Loading />
                :
                <>
                    <Link className='md:w-full  flex flex-col-reverse md:relative max-h-[654px] '>
                        <section className='w-full h-full block  md:absolute md:inset-0 md:z-[2]  px-2 md:bg-[rgba(0,_0,_0,_0.2)] '>
                            <div className='md:absolute bottom-10 left-10 text-black md:md:text-[#F6F7F9] mt-2'>
                                <h2 className='text-4xl md:text-6xl mb-4 md:mb-6 font-["Cormorant_Garamond",_serif]'>{getCategoriesById?.name}</h2>
                                <p className='mb-4 md:mb-8 '>New Collection</p>
                            </div>
                        </section>
                        {category.map((item, index) => (
                            item.name === getCategoriesById?.name &&
                            <section key={index} className=' h-full lg:h-[654px]'>
                                <div id='categoryImg' className=' w-full h-full'>
                                    <img className='w-full h-full object-cover' src={`/img/${item.img}`} alt={`Image${index}`} />
                                </div>
                            </section>
                        ))}
                    </Link>

                    <section className='flex gap-9 md:gap-5 justify-between flex-col md:flex-row items-center my-10 px-5'>
                        <div className=' w-full md:w-[15%] text-center '>
                            <p className='uppercase text-[1.2em]'>New arrivals</p>
                            <h2 className='my-6 text-6xl font-["Cormorant_Garamond",_serif]'>{filteredData?.data.length}</h2>
                            <Link to={'/'} className='md:block hidden '>
                                <span className='uppercase px-5 bg-black  text-white duration-300 hover:bg-white hover:text-black border border-black h-[50px] flex justify-center items-center'>Shop now</span>
                            </Link>
                        </div>
                        <div className=' w-full md:w-[80%]'>
                            <CategorySlider />
                        </div>
                        <Link to={'/'} className='md:hidden block w-44 '>
                            <span className='uppercase px-5 bg-black  text-white duration-300 hover:bg-white hover:text-black border border-black h-[50px] flex justify-center items-center'>Shop now</span>
                        </Link>
                    </section>

                    {/* CATEGORY SECTION */}

                    <section className='w-full text-center grid grid-cols-1 md:grid-cols-3 gap-10 mb-10'>
                        {getCategoriesById?.Subcategory.slice(0, 3).map((item, index) => (
                            <div key={index} onClick={() => filterBySubCategory(item.id)} className=' w-full relative group'>
                                <div>
                                    <section className='w-full h-full  flex justify-center font-["Montserrat",_sans-serif] items-center absolute inset-0 z-[2] py-4 px-2 bg-[rgba(0,_0,_0,_0.2)] '>
                                        <div>
                                            <span className='text-3xl md:text-[2.5em] text-[#F6F7F9]'>{item.name}</span>
                                        </div>
                                    </section>
                                    <section className='w-full h-full overflow-hidden'>

                                        {SubCategorySection.map((item, i) => (
                                            item.name === getCategoriesById?.name &&
                                            <div key={i}>
                                                <img
                                                    className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                                                    src={`/img/${item.img[index]}`} alt={`Image ${i}`} />
                                            </div>

                                        ))}

                                    </section>
                                </div>
                            </div>
                        ))}


                    </section >
                </>
            }
        </div >
    )
}

export default CategoryPage
