"use client"

import { cartContext } from '@/Context/CartContext'
import React, { useContext } from 'react'
import Loading from '../loading'
import { Button } from '@/components/ui/button'
import { ProductCart } from '@/types/cart.type'
import Image from "next/image";
import { toast } from 'sonner'
import Link from 'next/link'

const Cart = () => {



 const {isLoading,products,totalCartPrice,removeCartItem,updateCart,clearCart}= useContext(cartContext)

     async function removeItem(id:string){
      const data = await removeCartItem(id)
    
      if(data.status==="success"){  
        toast.success("success removing", {duration:1000, position:"top-center"})
      }
      else{
        toast.error("faild to remove this product from cart",{duration:1000, position:"top-center"})
      }
}


    async function updateCartItem(id:string, count:number){
      const data = await updateCart(id,count)
    
      if(data.status==="success"){
        toast.success("success updating", {duration:1000, position:"top-center"})
      }
      else{
        toast.error("faild to update this product from cart",{duration:1000, position:"top-center"})
      }
}


 if(isLoading){
  return <Loading />
 }

if(products.length == 0){
  return <div className='flex justify-center items-center h-screen'>
      
      <h1 className='text-red-600 text-3xl font-bold'>Cart Is Empty</h1>
    </div>
  
 }

  return (
    <div className='w-full md:w-[80%] mx-auto my-10 px-3 md:px-2 bg-slate-100' >

        <div className='p-3' >
          <h1 className='text-2xl font-bold' >Shop Cart :</h1>
          <p className='my-3 text-green-600 font-mono'>total Price : {totalCartPrice} EGP </p>
          <Button onClick={() => clearCart()} className='mb-10'> Clear Cart </Button>
          <Button  className='mb-10 ms-6' >
            <Link href="/payment">Payment</Link>
          </Button>

          <div className='allProducts'>
          {products.map(function(product:ProductCart , idx:number){
            return <div key={idx} className='flex items-center justify-between py-3  border-b-[1px] border-green-600/35'>
              <div className='flex items-center gap-7'>

                      <div>
                        <Image src={product.product.imageCover} alt="" height={200} width={200} />
                      </div>

                      <div>
                        <h1>{product.product.title}</h1>
                        <p className='my-3 text-green-700'>Price : {product.price}</p>
                        <Button onClick={()=>removeItem(product.product.id)}> Remove <i className="fa-thin fa-trash"></i></Button>
                      </div>

              </div>

                <div  className='flex items-center gap-3'>
                  <Button onClick={()=> updateCartItem(product.product.id,product.count + 1 )} >+</Button>

                  <p>{product.count}</p>

                  <Button onClick={()=> updateCartItem(product.product.id,product.count - 1 )} >-</Button>

                </div>


            </div>
          })}
          </div>
        </div>
    </div>
  )
}

export default Cart