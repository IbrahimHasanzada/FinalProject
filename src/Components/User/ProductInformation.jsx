import React, { useEffect, useState } from 'react'
import DetailsSlider from './Details/DetailsSlider'
import { FaRegHeart, FaWhatsapp } from 'react-icons/fa'
import BlackButton from '../BlackButton'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useAddToCardMutation, useGetProductByIdQuery } from '../../Store/EmporiumApi'
import { useParams } from 'react-router-dom'
import UnderlineButton from '../UnderlineButton'
import { toast } from 'react-toastify'
import Loading from '../Loading'
import { FaHeart } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { decrementLike, incrementLike } from '../../Store/LikeSlice'
import { Helmet } from 'react-helmet-async'
const ProductInformation = ({ toggleModal, ModalId }) => {
    const dispatch = useDispatch()
    const [manageId, setManageId] = useState('')
    const { data: productData, isLoading } = useGetProductByIdQuery(manageId, { skip: !manageId });
    const products = productData || {};
    const { name, id, description, discount, price, images, categoryId, subcategoryId, brandsId, Colors, Size, Brands } = products
    const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    const userData = JSON.parse(localStorage.getItem('user'))
    const { productsId } = useParams()
    useEffect(() => {
        ModalId ? setManageId(ModalId) : setManageId(productsId)
    }, [productsId, ModalId])
    const [showDescription, setShowDescription] = useState(true)
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const [like, setLike] = useState(false)
    const [addToBasket, { data: getBasketData }] = useAddToCardMutation()
    const addBasket = () => {
        (!userData) ? toast.error('Please login to add to cart') : addToBasket({ productId: id, count: 1, size: size, color: color })
    }
    useEffect(() => {
        const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        (likedItems.some(likedItem => likedItem.id === id)) && setLike(true)
    }, [id]);
    const handleLikeButton = () => {
        let likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        if (like) {
            likedItems = likedItems.filter(likedItem => likedItem.id !== id);
            dispatch(decrementLike())
        } else {
            likedItems.push(products)
            dispatch(incrementLike())
        }
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
        setLike(!like);

    };
    return (
        <div>
            <Helmet>
                <title>Tradium | {`${name ? name : ''}`}</title>
                <meta name="description" content="Category Page" />
            </Helmet>

            {isLoading ?
                <Loading />
                :
                <section className='flex flex-col w-full gap-5 md:gap-0  md:flex-row'>
                    <section className="w-full md:w-[416px] lg:w-[516px] xl:w-[566px]">
                        <DetailsSlider images={images} />
                    </section>
                    <section className={` w-full ${ModalId ? 'w-full md:ml-6' : 'md:w-[40%] md:mx-10'} `}>
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
                            <h1 className='text-3xl md:text-4xl md:mb-4'>{Brands?.name}</h1>
                            <h2 className='text-base '>{name}</h2>
                        </div>
                        <div className='py-2'>
                            <p>{price} USD</p>
                        </div>
                        <div className="py-2">
                            <p className="pb-4">Color:</p>
                            <div className="flex gap-2">
                                {Colors?.map((item, i) => (
                                    <div key={i} className='relative  '>
                                        <div
                                            style={color === item ? { border: `1px solid ${item}` } : {}}
                                            className={`${color === item && `p-1 h-8 w-8 flex items-center justify-center rounded-full`}`}>
                                            <div
                                                onClick={() => setColor(item)}
                                                style={{ background: item }}
                                                className={`rounded-full cursor-pointer  ${color === item ? 'h-6 w-6' : 'h-8 w-8'}  relative  ${item === 'white' ? 'border border-black' : ''}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='py-2'>
                            <p className="py-2">Size:</p>
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
                            <button onClick={handleLikeButton} className={`my-2  uppercase flex items-center justify-center ${ModalId ? 'border border-black rounded-full px-2 h-8' : 'rounded-sm w-full px-5 h-12 gap-4'}`}>
                                {likedItems?.map((item) => item.id).includes(id) ?
                                    <>
                                        <FaHeart className='text-xl' />
                                        {!ModalId && <span>Remove from wishlist</span>}
                                    </>
                                    :
                                    <>
                                        <FaRegHeart className='text-xl' />
                                        {!ModalId && <span>add to wishlist</span>}
                                    </>
                                }
                            </button>
                        </div>
                        {!ModalId &&
                            <section className="w-full py-2 border-y">
                                <div onClick={() => setShowDescription(!showDescription)} className="w-full flex justify-between items-center cursor-pointer">
                                    <span className='text-2xl font-["Cormorant_Garamond",_serif] py-5'>Description</span>
                                    <button >{showDescription ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                                </div>

                                <div className={`${showDescription ? 'block py-2' : 'hidden py-0'}`}>
                                    <p>{description}</p>
                                </div>
                            </section>
                        }
                        {ModalId &&
                            <button onClick={toggleModal}>
                                <UnderlineButton title='View product page' path={`/details/${id}`} />
                            </button>
                        }
                    </section>
                </section>
            }
        </div>
    )
}

export default ProductInformation
