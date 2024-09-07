import { FaWhatsapp, FaRegHeart } from "react-icons/fa"
import Card from "../Components/Card"
import BlackButton from "../Components/BlackButton"
import DetailsSlider from "../Components/Details.jsx/DetailsSlider"
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useState } from "react"
import Breadcrumb from "../Components/BreadCrumbs"
const Details = () => {

    const [showDescription, setShowDescription] = useState(true)
        
    return (
        <div className='wrapper mx-auto font-["Montserrat",_sans-serif]'>
            <Breadcrumb />
            <section className='flex flex-col gap-5 md:gap-0  md:flex-row'>
                <section className="w-full md:w-[416px] lg:w-[516px] xl:w-[566px]">
                        <DetailsSlider />
                </section>
                <section className='md:mx-10 w-full '>
                    <div className="mb-4">
                        <span className='px-4 py-1 text-sm  bg-[#B5314A] rounded-md text-white'>30% sale</span>
                    </div>
                    <div className="py-2">
                        <h1 className='text-4xl mb-4'>Jil Sander</h1>
                        <p>Loqo detallı çiyindən asma çanta</p>
                    </div>
                    <div className='py-2'>
                        <p>2 489 azn</p>
                    </div>
                    <div className="py-2">
                        <p className="pb-4">Rəng: Qara</p>
                        <p className='h-6 w-6 bg-black rounded-full'></p>
                    </div>
                    <div className='py-2'>
                        <p className="py-2">Ölçü: US</p>
                    </div>
                    <div className='py-2 w-full'>
                        <button  className="h-11 w-full my-4">
                            <BlackButton title='Add To Card' path='Basket' />
                        </button>
                        <button className='my-2 px-5 uppercase flex items-center justify-center w-full h-[50px] border border-black rounded-sm hover:bg-black hover:text-white duration-200'>
                            <FaWhatsapp className="mr-4 text-3xl" />
                            <span>Send us a message</span>
                        </button>
                        <button className='my-2 px-5 uppercase flex items-center justify-center w-full h-[50px] rounded-sm'>
                            <FaRegHeart className="mr-4 text-xl" />
                            <span>add to wishlist</span>
                        </button>
                    </div>
                    <section className="w-full border-y">
                        <div onClick={() => setShowDescription(!showDescription)} className="w-full flex justify-between items-center cursor-pointer">
                            <span className='text-2xl font-["Cormorant_Garamond",_serif] py-5'>Description</span>
                            <button >{showDescription ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                        </div>
                        <div className={`${showDescription ? 'block' : 'hidden'}`}>
                            <ul className="text-sm">
                                <li className="py-1">Tərkibi: 100% dana dərisi</li>
                                <li className="py-1">Rəng: qara</li>
                                <li className="py-1">Hündürlüyü: 21 sm</li>
                                <li className="py-1">Eni: 16 sm</li>
                                <li className="py-1">Dərinliyi: 16 sm</li>
                                <li className="py-1">Loqo printli</li>
                                <li className="py-1">Çiyin qayışı</li>
                                <li className="py-1">Zərfşəkilli ön hissə</li>
                                <li className="py-1">Daxili bölmə</li>
                            </ul>
                        </div>
                    </section>
                </section>
            </section>
            <section className="w-full py-4 md:py-10">
                <h2 className='text-2xl font-["Cormorant_Garamond",_serif] font-medium'>You might also like</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-4 py-6">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <section>

            </section>
        </div>
    )
}

export default Details
