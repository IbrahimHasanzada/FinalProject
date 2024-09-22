import { Link } from 'react-router-dom'
import CategorySlider from '../../Components/CategorySlider'
import UnderlineButton from '../../Components/UnderlineButton'
import Breadcrumb from '../../Components/BreadCrumbs'
import { useSelector } from 'react-redux'
import { useFilterProductsQuery } from '../../Store/EmporiumApi'
const CategoryPage = () => {
    const filters = useSelector((state) => state.filterProduct)
    const { data: filteredData } = useFilterProductsQuery(filters)
    console.log(filteredData);
    
    
    return (
        <div className='wrapper font-["Montserrat",_sans-serif]'>
            <Link className='md:w-full  relative max-h-[654px] '>
                <section className='w-full h-full md:block hidden  absolute inset-0 z-[2]  px-2 bg-[rgba(0,_0,_0,_0.2)] '>
                    <div className='absolute bottom-10 left-10 '>
                        <h2 className='text-6xl mb-6 text-[#F6F7F9]'>Boss</h2>
                        <p className='mb-8 text-[#F6F7F9]'>Yeni kolleksiya</p>
                        <Link to={'/'} >
                            <span className='uppercase px-5 bg-white  h-[50px] flex justify-center items-center'>Sifariş et</span>
                        </Link>
                    </div>
                </section>
                <section className=' h-full lg:h-[654px]'>
                    <div id='categoryImg' className=' w-full h-full'>
                        <img className='w-full h-full ' src="/img/kisi_1.jpg" alt="kisi" />
                    </div>
                </section>
            </Link>

            <section className='flex gap-5 justify-between flex-col md:flex-row items-center my-10 px-5'>
                <div className=' w-full md:w-[15%] text-center '>
                    <p className='uppercase text-[1.2em]'>Yeni Mehsullar</p>
                    <h2 className='my-6 text-6xl font-["Cormorant_Garamond",_serif]'>{filteredData?.length}</h2>
                    <Link to={'/'} className='md:block hidden'>
                        <span className='uppercase px-5 bg-black  text-white h-[50px] flex justify-center items-center'>Sifariş et</span>
                    </Link>
                </div>
                <div className=' w-full md:w-[80%]'>
                    <CategorySlider />
                </div>
                <Link to={'/'} className='md:hidden block w-44'>
                    <span className='uppercase px-5 bg-black  text-white h-[50px] flex justify-center items-center'>Sifariş et</span>
                </Link>
            </section>

            {/* CATEGORY SECTION */}

            <section className='w-full text-center flex md:flex-row flex-col gap-8 mb-10'>
                <Link to='/Brands'>
                    <div className='mb-3'>
                        <img src="/img/shoes.jpg" alt="" />
                    </div>
                    <div className='pl-2'>
                        <h2 className='mb-4 text-3xl'>Shoes</h2>
                        {/* <p className='mb-4 text-sm'>Featured for men!</p> */}
                        <UnderlineButton title='SHOP NOW' />
                    </div>
                </Link>
                <Link to='/Brands'>
                    <div className='mb-3'>
                        <img src="/img/bags.jpg" alt="" />
                    </div>
                    <div>
                        <h2 className='mb-4 text-3xl'>Bags</h2>
                        {/* <p className='mb-4 text-sm'>Featured for men!</p> */}
                        <UnderlineButton title='SHOP NOW' />
                    </div>
                </Link>
            </section>
        </div>
    )
}

export default CategoryPage
