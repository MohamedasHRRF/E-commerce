
"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"

import 'swiper/css';
import { Category } from '@/types/category.type';
const SwiperCategory = ({categories}:{categories:Category}) => {
  return (
      <Swiper
      spaceBetween={4}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
    >

      {categories.map((category:Category, idx:number) => <SwiperSlide key={idx}>

           <Image width={500} height={500} src={category.image} className='h-[200px] object-cover w-full' alt={category.title}/>
          <p className='my-4 text-center'>{category.name} </p>
       </SwiperSlide> 
      )}
      
     


    </Swiper>
  )
}

export default SwiperCategory