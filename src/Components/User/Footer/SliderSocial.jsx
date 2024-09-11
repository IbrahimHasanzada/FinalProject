import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
  const img = [
    'instagram-1.jpg',
    'instagram-2.jpg',
    'instagram-3.jpg',
    'instagram-4.jpg',
    'instagram-5.jpg',
    'instagram-6.jpg'
  ];  

  var settings = {
    arrows:false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {img.map((item, i) => (
        <div className="px-2" key={i}>
          <img src={`/img/${item}`} alt={`img${i}`} />
        </div>
      ))}
    </Slider>

  );
}
