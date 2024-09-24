import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useFilterProductsQuery } from "../Store/EmporiumApi";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

// Özel Prev Arrow Bileşeni
// const PrevArrow = ({ className, onClick }) => {
//     return (
//         <div className={`${className} custom-prev-arrow`} onClick={onClick}>
//             <IoIosArrowBack size={30} color="black" />
//         </div>
//     );
// };

// // Özel Next Arrow Bileşeni
// const NextArrow = ({ className, onClick }) => {
//     return (
//         <div className={`${className} custom-next-arrow`} onClick={onClick}>
//             <IoIosArrowForward size={30} color="black" />
//         </div>
//     );
// };

export default function SimpleSlider() {
    const location = useLocation();
    const [params, setParams] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const fullQuery = searchParams.toString();
        fullQuery && setParams(fullQuery);
    }, [location]);

    const { data: filteredData } = useFilterProductsQuery(params, { skip: !params });

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        dots: true,
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
            {filteredData?.data.map((item, i) => (
                <div className="px-2 mb-5" key={i}>
                    <Card slider={true} item={item} />
                </div>
            ))}
        </Slider>
    );
}
