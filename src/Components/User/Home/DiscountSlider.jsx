import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function DiscountSlider() {
    const settings = {
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            <div className='relative '>
                <div className='absolute top-1  w-full  flex justify-between '>
                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                    <CiHeart className='text-2xl mr-1' />
                </div>
                <Link>
                    <div className="aspect-[4/3]">
                        <img className="h-full object-cover" src="/img/papaq.jpeg" alt="p" />
                    </div>
                </Link>
                <div className='pt-[10px]'>
                    <p className="font-bold text-sm">Boss</p>
                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                    <p className='py-[10px]'>395</p>
                </div>
            </div>
            <div className='relative'>
                <div className='absolute top-1  w-full  flex justify-between '>
                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                    <CiHeart className='text-2xl mr-1' />
                </div>
                <Link>
                    <div className="aspect-[4/3]">
                        <img className="h-full object-cover" src="/img/qadin.jpg" alt="p" />
                    </div>
                </Link>
                <div className='pt-[10px]'>
                    <p className="font-bold text-sm">Boss</p>
                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                    <p className='py-[10px]'>395</p>
                </div>
            </div>
            <div className='relative '>
                <div className='absolute top-1  w-full  flex justify-between '>
                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                    <CiHeart className='text-2xl mr-1' />
                </div>
                <Link>
                    <div className="aspect-[4/3]">
                        <img className="h-full object-cover" src="/img/papaq.jpeg" alt="p" />
                    </div>
                </Link>
                <div className='pt-[10px]'>
                    <p className="font-bold text-sm">Boss</p>
                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                    <p className='py-[10px]'>395</p>
                </div>
            </div>
            <div className='relative '>
                <div className='absolute top-1  w-full  flex justify-between '>
                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                    <CiHeart className='text-2xl mr-1' />
                </div>
                <Link>
                    <div className="aspect-[4/3]">
                        <img className="h-full object-cover" src="/img/qadin.jpg" alt="p" />
                    </div>
                </Link>
                <div className='pt-[10px]'>
                    <p className="font-bold text-sm">Boss</p>
                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                    <p className='py-[10px]'>395</p>
                </div>
            </div>
            <div className='relative '>
                <div className='absolute top-1  w-full  flex justify-between '>
                    <span className=' bg-[#6D7A5E] px-4 ml-1 text-white rounded-sm'>Yeni</span>
                    <CiHeart className='text-2xl mr-1' />
                </div>
                <Link>
                    <div className="aspect-[4/3]">
                        <img className="h-full object-cover" src="/img/kisi_1.jpg" alt="p" />
                    </div>
                </Link>
                <div className='pt-[10px]'>
                    <p className="font-bold text-sm">Boss</p>
                    <p className='text-sm text-[#777]'>Zəncirbəndli bağlanma ilə uzunqol kardiqan</p>
                    <p className='py-[10px]'>395</p>
                </div>
            </div>
        </Slider>
    );
}