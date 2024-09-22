import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import Card from "../../Components/Card";

const WishList = () => {
    let likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    const [updatetLikedItems, setUpdateLikedItems] = useState(likedItems)
    const handleDeleteLike = (itemId) => {
        if (itemId) likedItems = likedItems.filter(likedItem => likedItem.id !== itemId);
            localStorage.setItem('likedItems', JSON.stringify(likedItems));
            setUpdateLikedItems(likedItems.filter(item => item.id !== itemId))
    }
    const wish = true;
    return (
        <div className="wrapper">
            <div className="w-full">
                <h1 className='text-5xl font-["Cormorant_Garamond",_serif]'>Wishlist</h1>
            </div>
            {updatetLikedItems.length ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-10 my-10">
                    {likedItems.map((item, i) => (
                        // console.log(item)
                        
                        <Card handleDeleteLike={handleDeleteLike} wish={wish} key={i} item={item} />
                        // <div key={i} className='relative w-full h-[311px] md:h-[476px]  rounded-lg'>
                        //     <div className={`absolute top-2 w-full flex ${item.discount ? 'justify-between' : 'justify-end'} `}>
                        //         {item.discount > 0 && (
                        //             <span className='bg-[#B5314A] px-4 ml-2.5 text-white rounded-md'>{item.discount}%</span>
                        //         )}
                        //         <button onClick={() => handleDeleteLike(item.id)} className="text-xl mr-2.5">
                        //             <FaXmark />
                        //         </button>
                        //     </div>
                        //     <Link to={`/Details/${item.discountid}`}>
                        //         <img
                        //             className='rounded-t-lg w-full h-[60%] object-contain md:h-[70%]'
                        //             src={item.images ? item.images[0] : "default-image.jpg"}
                        //             alt={item.name || "Product"}
                        //         />
                        //     </Link>
                        //     <div className='p-2.5 w-full'>
                        //         <div className='h-14 mb-3 w-full'>
                        //             <p className="font-bold mb-3 text-md">{item.name ? `${item.name.slice(0, 10)}...` : 'Unnamed'}</p>
                        //             <p className='text-sm text-[#777]'>{item.description ? `${item.description.slice(0, 30)}...` : 'No description'}</p>
                        //         </div>
                        //         <p className='py-[10px]'>{item.price ? `$${item.price}` : 'Price not available'}</p>
                        //     </div>
                        // </div>
                    ))}
                </div>
            ) : (
                <section className='w-full flex flex-col items-center font-["Cormorant_Garamond",_serif]'>
                    <CiHeart className="text-9xl" />
                    <p className="text-3xl mt-8">Your wishlist is empty</p>
                </section>
            )}
        </div>
    );
};

export default WishList;
