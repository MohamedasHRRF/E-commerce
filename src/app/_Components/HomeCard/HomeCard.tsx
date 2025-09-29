 import React from 'react'
 import {
   Card,
   CardContent,
   CardFooter,
   CardHeader
 } from "@/components/ui/card" 

  import Link from "next/link"
  import Image from "next/image"
import { Product } from '@/types/product.type'
import AddBtnCart from '../addBtnCart/AddBtnCart'


 const HomeCard = ({product} :{product: Product}    ) => {
   return (
    <div  className="w-full sm:w-1/2 md:w1/3 lg:w-1/4   p-3">

   

    <div className="inner">
      
 <Card className="p-2 gap-2" >

  <Link href={`/productDetails/${product.id}`}>
  <CardHeader className="p-0">


      <Image width={500} height={500} src={product.imageCover} alt={product.title} />

  </CardHeader>

  <CardContent className="p-0 ">
    <p className="font-bold text-green-500 mb-3 ps-2">{product.category.name}</p>
    <p className=" line-clamp-1 mb-3 ps-2">{product.title}</p>

  </CardContent>

  <CardFooter className="p-0 ">
     <div className="w-full flex justify-between items-center p-5">
      <p>{product.price} EGP</p>
      <p>{product.ratingsAverage} <i className=" fa-solid text-yellow-300 fa-star "></i></p>
     </div>
    
  </CardFooter>
 </Link>
     <AddBtnCart id={product.id}/>
</Card>

        
    </div>
  


 

</div>
   )
 }
 
 export default HomeCard