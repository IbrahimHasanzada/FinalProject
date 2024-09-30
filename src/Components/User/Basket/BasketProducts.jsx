import { CiHeart } from "react-icons/ci";
import { FaXmark } from 'react-icons/fa6';
import { useAddToCardMutation, useDelCardsMutation, useGetAllCartQuery } from "../../../Store/EmporiumApi";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const BasketProducts = ({ addToCard, product, check }) => {
    const [deleteCards, { data: getDeletedCard }] = useDelCardsMutation();
    const [addToBasket, { data: getBasketData }] = useAddToCardMutation()
    const handleDeleteCard = (id) => { deleteCards(id) }
    const addCount = (count) => { addToBasket({ productId: product.product_id.id, count: count }) }
    const remCount = (count) => {
        addToBasket({ productId: product.product_id.id, count: count })
        product.count <= 1 && deleteCards(product.id)
    }
    if (!product || !product.product_id) {
        return (
            <span>Loading data...</span>
        )
    }

    const { name, price, id, images } = product.product_id;
    return (
        <div className={`py-4 ${addToCard ? 'px-0' : 'px-5'} border-b font-["Montserrat",_sans-serif]`}>
            <div className="relative flex items-start w-full">
                <section className={`${addToCard ? 'w-[120px] h-40' : 'w-[70px] h-[93px]'}`}>
                    {images?.length > 0 && (
                        <img src={images[0]} alt={`img${id}`} />
                    )}
                </section>
                <section className='ml-4'>
                    <div className='mb-4'>
                        <h3 className='mb-1 uppercase text-sm'>{name}</h3>
                        <p className='text-[#777] uppercase text-sm'>size: {product.Size}</p>
                        <p className='text-[#777] uppercase text-sm'>qty: {product.count}</p>
                    </div>
                    <div>
                        <p className='uppercase text-sm'>{price} USD</p>
                    </div>
                    <div className={`mt-4 gap-2 items-center ${addToCard ? 'flex' : 'hidden'}`}>
                        <p>Color:</p>
                        <div
                            style={{ background: product.Color }}
                            className={`rounded-full cursor-pointer h-6 w-6 ${product.Color === 'WHITE' ? 'border border-black' : ''}`}></div>
                    </div>
                    {/* <CiHeart className="mr-4 text-lg" />
                        <p className='uppercase text-xs'>add to wishlist</p> */}
                    {!check &&
                        <>
                            <div className="flex items-center gap-2 mt-4">
                                <button onClick={() => remCount(-1)} className="h-8 w-8 flex justify-center items-center border border-black hover:bg-black hover:text-white"><FiMinus /></button>
                                <span>{product.count}</span>
                                <button onClick={() => addCount(1)} className="h-8 w-8 flex justify-center items-center border border-black hover:bg-black hover:text-white"><FiPlus /></button>
                            </div>

                            <button onClick={() => handleDeleteCard(product.id)} className='absolute right-0 top-0'>
                                <FaXmark className="text-lg" />
                            </button>
                        </>
                    }
                </section>
            </div >
        </div >
    );
};

export default BasketProducts;
