import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import '../../styles/slider.css'

const ImgSlider = () => {
    let setting={
        dots:true,
        infinit:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    };
    return (
        <div>
        <Slider {...setting}>
          <div>
          <img src="/images/banner2.jpg"/>
          </div>
          <div>
          <img src="/images/banner3.jpg"/>
          </div>
          <div>
          <img src="/images/banner4.jpg"/>
          </div>

        </Slider>
      </div>
    )
}

export default ImgSlider
