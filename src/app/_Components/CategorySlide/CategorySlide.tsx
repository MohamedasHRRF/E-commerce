import React from 'react'
import { Category } from '@/types/product.type';
import SwiperCategory from '../SwiperCategory/SwiperCategory';
import { getCategories } from '@/apis/allCategories';

const CategorySlide = async () => {
   const data:Category[] = await getCategories()

    
  return (
    <div className='mb-3'>
        <SwiperCategory  categories={data}/>

    </div>
  )
}

export default CategorySlide