import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
    <h2> single item</h2>
    <Slider {...settings}>
    {sdata.map((value)=>{
        return(
            <div className='box'>
                <div className='img'>
                    <img scr={value.cover}/>
                </div>
                <div className='text'>
                    <span>{value.category}</span>
                    <h2>{value.title}</h2>
                    <p>{value.desc}</p>                </div>
            </div>
        )
    }}
      <div>
        <h3>1</h3>
      </div>
    </Slider>
  
    </>
  )
}

export default slide
