import React, { useEffect, useState } from 'react'
import DetailsSlider from './Details/DetailsSlider'
import { FaRegHeart, FaWhatsapp } from 'react-icons/fa'
import BlackButton from '../BlackButton'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useAddToCardMutation, useGetProductByIdQuery } from '../../Store/EmporiumApi'
import { useParams } from 'react-router-dom'
import UnderlineButton from '../UnderlineButton'

const ProductInformation = ({ toggleModal, ModalId }) => {
    console.log(ModalId);

    const { productsId } = useParams()
    const [manageId, setManageId] = useState('')
    useEffect(() => {
        productsId ? setManageId(productsId) : setManageId(ModalId)
    }, [manageId])
    const [showDescription, setShowDescription] = useState(true)
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const { data: productData, isLoading, error } = useGetProductByIdQuery(manageId, { skip: !manageId });
    const products = productData || {};
    const [addToBasket, { data: getBasketData }] = useAddToCardMutation()
    const addBasket = () => {
        addToBasket({ productId: id, count: 1, size: size, color: color })
    }
    const { name, id, description, discount, price, images, categoryId, subcategoryId, brandsId, Colors, Size } = products
    return (
        <div>
            <section className='flex flex-col w-full gap-5 md:gap-0  md:flex-row'>
                <section className="w-full md:w-[416px] lg:w-[516px] xl:w-[566px]">
                    <DetailsSlider images={images} />
                </section>
                <section className={` w-full ${ModalId ? 'w-full md:ml-2' : 'md:w-[40%] md:mx-10'} `}>
                    <div className="mb-4">
                        {discount >= 5 ? (
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
                                <div
                                    key={i}
                                    onClick={() => setColor(item)}
                                    style={{ background: item }}
                                    className={`rounded-full cursor-pointer h-6 w-6 ${color === item ? 'border border-black' : 'border-0'} ${item === 'white' ? 'border border-black' : ''}`}></div>
                            ))}
                        </div>
                    </div>
                    <div className='py-2'>
                        <p className="py-2">Ölçü:</p>
                        <ul className="grid grid-cols-4 gap-5 w-full">
                            {Size?.map((item, i) => (
                                <li
                                    key={i}
                                    onClick={() => setSize(item)}
                                    className={`text-center py-2 px-2 w-full border cursor-pointer border-black rounded-sm ${size === item ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`py-2 w-full ${ModalId && 'flex gap-2 items-center'}`}>
                        <button onClick={() => addBasket()} className="h-11 w-full my-4">
                            <BlackButton title='Add To Card' path='#' />
                        </button>
                        {!ModalId && <button className='my-2 px-5 uppercase flex items-center justify-center w-full h-[50px] border border-black rounded-sm hover:bg-black hover:text-white duration-200'>
                            <FaWhatsapp className="mr-4 text-3xl" />
                            <span>Send us a message</span>
                        </button>}
                        <button className={`my-2  uppercase flex items-center justify-center ${ModalId ? 'border border-black rounded-full px-2 h-8' : 'rounded-sm w-full px-5 h-12'}`}>
                            <FaRegHeart className={`${ModalId ? ' text-base' : 'mr-4 text-xl'} `} />
                            {!ModalId && <span>add to wishlist</span>}
                        </button>
                    </div>
                    {!ModalId &&
                        <section className="w-full border-y">
                            <div onClick={() => setShowDescription(!showDescription)} className="w-full flex justify-between items-center cursor-pointer">
                                <span className='text-2xl font-["Cormorant_Garamond",_serif] py-5'>Description</span>
                                <button >{showDescription ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                            </div>

                            <div className={`${showDescription ? 'block' : 'hidden'}`}>
                                <p>{description}</p>
                            </div>
                        </section>
                    }
                    {ModalId &&
                        <button onClick={toggleModal}>
                            <UnderlineButton title='View product page' path='#' />
                        </button>
                    }
                </section>
            </section>
        </div>
    )
}

export default ProductInformation