import { FaWhatsapp, FaRegHeart } from "react-icons/fa"
import Card from "../../Components/Card"
import BlackButton from "../../Components/BlackButton"
import DetailsSlider from "../../Components/User/Details/DetailsSlider"
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useState } from "react"
import Breadcrumb from "../../Components/BreadCrumbs"
import { useParams, useSearchParams } from "react-router-dom"
import { useAddToCardMutation, useGetAllProductQuery, useGetProductByIdQuery } from "../../Store/EmporiumApi"
const Details = () => {
    const { productsId } = useParams()
    const { data: productData, isLoading, error } = useGetProductByIdQuery(productsId);
    const [addToBasket, { data: getBasketData }] = useAddToCardMutation()
    const { data: getAllProduct } = useGetAllProductQuery()
    const [showDescription, setShowDescription] = useState(true)
    const products = productData || {};
    const { name, id, description, discount, price, images, categoryId, subcategoryId, brandsId, Colors, Size } = products
    const addBasket = () => {
        addToBasket({ productId: id, count: 1 })
    }

    return (
        <div className='wrapper mx-auto font-["Montserrat",_sans-serif]'>
            <section className='flex flex-col gap-5 md:gap-0  md:flex-row'>
                <section className="w-full md:w-[416px] lg:w-[516px] xl:w-[566px]">
                    <DetailsSlider images={images} />
                </section>
                <section className='md:mx-10 w-full md:w-[40%] '>
                    <div className="mb-4">
                        {discount > 0 ? (
                            <span className='px-4 py-1 text-sm  bg-[#B5314A] rounded-md text-white'>
                                <span>{discount}%</span>
                            </span>
                        ) : (
                            <span></span>
                        )}
                    </div>
                    <div className="py-2">
                        <h1 className='text-3xl md:text-4xl md:mb-4'>{name}</h1>
                        {/* <p>{description}</p> */}
                    </div>
                    <div className='py-2'>
                        <p>{price} USD</p>
                    </div>
                    <div className="py-2">
                        <p className="pb-4">Color:</p>
                        <div className="flex gap-2">
                            {Colors?.map((item, i) => (
                                <div key={i} style={{ background: item }} className={`rounded-full h-6 w-6 ${item === 'white' ? 'border border-black' : ''}`}></div>
                            ))}
                        </div>
                    </div>
                    <div className='py-2'>
                        <p className="py-2">Ölçü:</p>
                        <ul className="grid grid-cols-4 gap-5 w-full">
                            {Size?.map((size, i) => (
                                <li key={i} className=" text-center py-2 px-2 w-full border border-black rounded-sm">{size}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='py-2 w-full'>
                        <button onClick={() => addBasket()} className="h-11 w-full my-4">
                            <BlackButton title='Add To Card' path='#' />
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
                            <p>{description}</p>
                        </div>
                    </section>
                </section>
            </section>
            <section className="w-full py-4 md:py-10">
                <h2 className='text-2xl font-["Cormorant_Garamond",_serif] font-medium'>You might also like</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-4 py-6">
                </div>
            </section>
            {/* <section>
                {getAllProduct?.data.map((item,i) => (
                    <Card key={i} product={item} />
                ))}
            </section> */}
        </div>
    )
}

export default Details
