import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSearchProductsQuery } from "../Store/EmporiumApi";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function SimpleSlider() {
    const filters = useSelector((state) => state.filterProduct)
    const { data: filteredData } = useSearchProductsQuery(filters)
    console.log(filteredData);
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
            {filteredData?.map((item, i) => (
                <div className="px-2" key={i}>
                    <Card key={i} item={item} />
                </div>
            ))}
        </Slider>
    );
}