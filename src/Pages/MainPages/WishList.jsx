import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import Card from "../../Components/Card";
import { useDispatch } from "react-redux";
import { decrementLike } from "../../Store/LikeSlice";
import { Helmet } from "react-helmet-async";

const WishList = () => {
    const dispatch = useDispatch()
    let likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    const [updatetLikedItems, setUpdateLikedItems] = useState(likedItems)
    const handleDeleteLike = (itemId) => {
        if (itemId) likedItems = likedItems.filter(likedItem => likedItem.id !== itemId);
        localStorage.setItem('likedItems', JSON.stringify(likedItems))
        dispatch(decrementLike())
        setUpdateLikedItems(likedItems.filter(item => item.id !== itemId))
    }
    const wish = true
    return (
        <div className="wrapper">
            <Helmet>
                <title>Emporium | Wishlist</title>
                <meta name="description" content="Wishlist Page" />
            </Helmet>
            <div className="w-full">
                <h1 className='text-5xl font-["Cormorant_Garamond",_serif]'>Wishlist</h1>
            </div>
            {updatetLikedItems.length ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-10 my-10">
                    {likedItems.map((item, i) => (
                        <Card handleDeleteLike={handleDeleteLike} wish={wish} key={i} item={item} />

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
