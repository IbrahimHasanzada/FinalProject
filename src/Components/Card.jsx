import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import QuickModal from './User/QuickModal';
import ProductInformation from './User/ProductInformation';
import { useDispatch} from 'react-redux';
import { decrementLike, incrementLike, setLiked } from '../Store/LikeSlice';

const Card = ({ item, wish, handleDeleteLike, slider }) => {
    const [like, setLike] = useState(false);
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const { name, description, price, images, id, discount, Brands } = item;
    useEffect(() => {
        const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        (likedItems.some(likedItem => likedItem.id === id)) &&  setLike(true);
        
    }, [id]);
    const handleLikeButton = (itemId) => {
        let likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
        if (like) {
            likedItems = likedItems.filter(likedItem => likedItem.id !== itemId);
            dispatch(decrementLike())
        } else {
            likedItems.push(item);
            dispatch(incrementLike())
        }
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
        setLike(!like);
    };

    return (
        <div className='relative h-[311px] md:h-[476px] w-full rounded-lg'>
            <div className={`absolute z-10 top-2.5 w-full flex ${discount >= 5 ? 'justify-between' : 'justify-end'}`}>
                {discount >= 5 ? <span className='bg-[#B5314A] px-4 ml-2.5 text-white rounded-md'>{discount}%</span> : ''}
                {wish ? (
                    <button onClick={() => handleDeleteLike(id)} className="text-xl mr-2.5">
                        <FaXmark />
                    </button>
                ) : (
                    <button className='mr-2.5 text-xl ' onClick={() => handleLikeButton(id)}>
                        {like ? <FaHeart /> : <FaRegHeart />}
                    </button>
                )}
            </div>
            <div className='overflow-hidden relative group'>
                <Link to={`/details/${id}`}>
                    <img className='rounded-t-lg w-full object-cover xl:h-[370px] sm:h-[270px] h-[208px]' src={images[0]} alt="p" />
                </Link>
                {!slider && (
                    <>
                        <button onClick={toggleModal} className="w-full bg-[#00000082] absolute flex justify-center items-center h-9 duration-300 left-0 right-0 -bottom-full group-hover:bottom-0 text-white">
                            Quick view
                        </button>
                        <QuickModal id={id} isOpen={isModalOpen} toggleModal={toggleModal}>
                            <div className='w-full'>
                                <ProductInformation toggleModal={toggleModal} ModalId={id} />
                            </div>
                        </QuickModal>
                    </>
                )}
            </div>
            <div className='p-2.5 w-full'>
                <div className='h-14 mb-3 w-full'>
                    <p className="font-bold mb-3 text-md">{Brands.name}</p>
                    <p className='text-sm text-[#777]'>{name}</p>
                </div>
                <p className='py-2.5'>{price} $</p>
            </div>
        </div>
    );
};

export default Card;
