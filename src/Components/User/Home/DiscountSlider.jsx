import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useGetAllProductQuery } from "../../../Store/EmporiumApi";
import Card from "../../Card";


export default function DiscountSlider() {
    const { data: getDiscountedData } = useGetAllProductQuery()
    const slider = true;
    const settings = {
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
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
            {getDiscountedData?.data.map((item, i) => (
                item.discount >= 10 &&
                <Card slider={slider} key={i} item={item} />
            ))}
        </Slider>
    );
}