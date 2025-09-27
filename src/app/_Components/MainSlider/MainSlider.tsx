"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

import banner1 from "./../../../../public/screens/slider/grocery-banner-2.jpeg"
import banner2 from "./../../../../public/screens/slider/grocery-banner.png"


import slide1   from "./../../../../public/screens/slider/slider-image-1.jpeg"
import slide2  from "./../../../../public/screens/slider/slider-image-2.jpeg"
import slide3   from "./../../../../public/screens/slider/slider-image-3.jpeg"
import Image from "next/image"

const MainSlider = () => {
  return (
    <div className='mb-10 flex'>
        <div className='w-2/3'>
        <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
    >
      <SwiperSlide>
                <Image className='h-[400px] object-cover' src={slide1} alt='' />
      </SwiperSlide>

      <SwiperSlide>
                <Image className='h-[400px] object-cover' src={slide2} alt='' />
      </SwiperSlide>

      <SwiperSlide>
                <Image className='h-[400px] object-cover' src={slide3} alt='' />
      </SwiperSlide>
    </Swiper>
        </div>
        <div className='w-1/3'>
        <Image className='h-[200px] object-cover' src={banner1} alt='' />
        <Image className='h-[200px] object-cover' src={banner2} alt='' />
        </div>
    </div>
  )
}

export default MainSlider 