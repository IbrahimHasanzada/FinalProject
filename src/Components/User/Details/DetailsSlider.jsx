import React, { useState } from "react";
import Slider from "react-slick";
const DetailsSlider = ({ images = [] }) => {
    const [selectSlide, setSelectSlide] = useState(0);
    const settings = {
        customPaging: function (i) {
            return (
                <a className={` ${i === selectSlide ? 'opacity-1' : 'opacity-70'}`} onClick={() => setSelectSlide(i)}>
                    <img
                        src={images[i]}
                        alt={`Slide thumbnail ${i + 1}`}
                        className={i === selectSlide ? 'scale-90 rounded-md border border-black' : ''}
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
        beforeChange: (current, next) => setSelectSlide(next),
    };

    return (
        <div id="detailsSlider">
            <div className="slider-container">
                <Slider {...settings}>
                    {images?.map((img, i) => (
                        <div key={i}>
                            <img src={`${img}`} alt={`Slide image ${i + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default DetailsSlider;
