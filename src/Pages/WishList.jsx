import { CiHeart } from "react-icons/ci";
const WishList = () => {
    return (
        <div className="wrapper">
            <div className="w-full">
                <h1 className='text-5xl font-["Cormorant_Garamond",_serif]'>Wishlist</h1>
            </div>
            <section className='w-full flex flex-col items-center font-["Cormorant_Garamond",_serif]' >
                    <CiHeart  className="text-9xl"/>
                    <p className="text-3xl mt-8">Your wishlist is empty</p>
            </section>
        </div>
    )
}

export default WishList
