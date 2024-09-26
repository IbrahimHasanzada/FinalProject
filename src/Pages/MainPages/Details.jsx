import { FaWhatsapp, FaRegHeart } from "react-icons/fa"
import Card from "../../Components/Card"
import BlackButton from "../../Components/BlackButton"
import DetailsSlider from "../../Components/User/Details/DetailsSlider"
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { useAddToCardMutation, useGetAllProductQuery, useGetProductByIdQuery } from "../../Store/EmporiumApi"
import ProductInformation from "../../Components/User/ProductInformation"
const Details = () => {
    const { data: getAllProduct, isLoading } = useGetAllProductQuery()
    return (
        <div className='wrapper mx-auto font-["Montserrat",_sans-serif]'>
            <ProductInformation />
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
