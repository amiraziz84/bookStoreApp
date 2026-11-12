import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderModule from "react-slick";

import list from "../Data/list.json"
import Cards from './Cards';
const Slider = SliderModule.default || SliderModule;

function FreeBook() {
    const filterData = list.filter((data) => data.category  === "Free");
   
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    
    
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20- px-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ratione explicabo id placeat perferendis excepturi. Nihil nam a hic pariatur provident, perspiciatis placeat repellendus id! Ex, delectus necessitatibus. Soluta, quos.</p>
        </div>
    
    <div>
      <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
      
    </div>
    </div>
    </>
  )
}

export default FreeBook
