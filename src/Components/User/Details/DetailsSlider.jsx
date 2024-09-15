import React, { useState } from "react";
import Slider from "react-slick";
import { useGetAllProductQuery } from "../../../Store/EmporiumApi";

const DetailsSlider = () => {

    const {data:getAllProduct} = useGetAllProductQuery()

    const imageSlider = ['basketexample1.jpeg', 'basketexample2.jpeg', 'basketexample3.jpeg', 'basketexample4.jpeg'];
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        customPaging: function (i) {
            return (
                <a className={i === activeSlide ? 'opacity-1' : 'opacity-50'} onClick={() => setActiveSlide(i)}>
                    <img
                        src={`/img/basketexample${i + 1}.jpeg`}
                        alt={`img - ${i}`}
                        className={i === activeSlide ? 'scale-75 border border-black' : ''}
                    />
                </a>
            );
        },
        arrows: false,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setActiveSlide(next) 
    };

    return (
        <div id="detailsSlider">
            <div className="slider-container">
                <Slider {...settings}>
                    {imageSlider.map((img, i) => (
                        <div key={i}>
                            <img src={`/img/${img}`} alt={`slide ${i}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default DetailsSlider;
