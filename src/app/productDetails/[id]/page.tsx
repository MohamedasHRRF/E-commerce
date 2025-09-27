import React from 'react'
import getSingelProduct from "@/apis/singelProduct"
  import Image from "next/image"

import { Button } from "@/components/ui/button"
const ProductDeatails = async ({params} : {params:{id:string}}) => {

  const {id}=await params
 const data= await getSingelProduct(id)
  return (
    <div className='w-full px-5 md:px-0 mx-auto my-10 flex items-center flex-col md:flex-row'>

      <div className='w-full md:w-1/3'>
        <Image width={500} height={500} src={data.imageCover} className='w-full' alt={data.title} />
      </div>

      <div className='w-full md:w-2/3 m-10 md:m-0 ps-10'>
        <h2 className='text-2xl text-green-600 fon-bold'>{data.title}</h2>
        <p className='my-5'>{data.description}</p>
        <p className=''>{data.category.name}</p>

        <div className='w-[80%] my-5 flex justify-between items-center'>
          <p>{data.price} EGP</p>
          <p>{data.ratingsAverage} <i className=" fa-solid text-yellow-300 fa-star "></i></p>
        </div>

        <Button className='w-[90%]' >Add to cart</Button>
      </div>

    </div>
  )
}

export default ProductDeatails    