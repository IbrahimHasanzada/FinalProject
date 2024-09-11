import { CiHeart } from "react-icons/ci";
import { FaXmark } from 'react-icons/fa6'

const BasketProducts = ({ addToCard }) => {

    const basketProducts = [
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
        {
            img: 'basketexample1.jpeg',
            name: 'saint laurent',
            desc: 'Logo printed cotton T-shirt',
            size: 'XS',
            quality: '1',
            price: 255
        },
    ]

    return (
        <div>
            {basketProducts.map((item, i) => (
                <div key={i} className={`py-4 ${addToCard ? 'px-0' : 'px-5'} border-b font-["Montserrat",_sans-serif]`}>
                    <div className={`relative flex items-start w-full`}>
                        <section className={`${addToCard ? 'w-[120px] h-40' : 'w-[70px] h-[93px]'}`}>
                            <img src={`/img/${item.img}`} alt="" />
                        </section>
                        <section className=' ml-4'>
                            <div className=' mb-4'>
                                <h3 className='mb-1 uppercase text-sm'>{item.name}</h3>
                                <p className='mb-3 text-[#777] text-sm'>{item.desc}</p>
                                <p className='text-[#777] uppercase text-sm'>size: {item.size}</p>
                                <p className='text-[#777] uppercase text-sm'>qty :{item.quality}</p>
                            </div>
                            <div>
                                <p className='uppercase text-sm'>{item.price} azn</p>
                            </div>
                            <div className={`mt-4 items-center ${addToCard ? 'flex' : 'hidden'}`}>
                                <CiHeart className="mr-4 text-lg" />
                                <p className='uppercase text-xs'> add to wishlist</p>
                            </div>
                            <button className='absolute right-0 top-0'>
                                <FaXmark className="text-lg" />
                            </button>
                        </section>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BasketProducts
