import React, { Component } from "react";
import Slider from "react-slick";
const DetailsSlider = () => {
    const imageSlider = ['basketexample1.jpeg', 'basketexample2.jpeg', 'basketexample3.jpeg', 'basketexample4.jpeg']
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={`/img/basketexample${i}.jpeg`} />
                </a>
            );
        },
        arrows: false,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {imageSlider.map((img, i) => (
                    <div key={i}>
                        <img src={`/img/${img}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default DetailsSlider
