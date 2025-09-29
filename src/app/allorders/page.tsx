import getUserOrder from '@/apis/getUserOrders'
import { CartItem, Order, Orders } from '@/types/order.type';
import Image from 'next/image';
import React from 'react'

const AllOrders = async () => {

  const data:Orders  =await getUserOrder()

  return (
    <div className='w-full md:w-[80%] mx-auto my-10 px-5 md:px-0'>
      <div className='allOrders'>

          {data.map(function(order:Order , idx:number){
            return <div className='p-5 bg-slate-300 mb-5' key={idx}>

              <div className='flex  border-b-[1px] border-gray-700 p-5'>
                {order.cartItems.map(function(item:CartItem, idx:number){
                  return <div className='w-1/6 ms-4' key={idx}>
                    <Image src={item.product.imageCover} alt={item.product.title} className='w-full rounded-2xl' width={200} height={200} />
                    <h2 className="line-clamp-1">{item.product.title}</h2>
                  </div>
                 })}


                 
              </div>


                <div className='mt-6 p-7 flex items-center justify-around'>
                 <h2 className='font-mono' >Payment Type Method : {order.paymentMethodType}</h2>
                 <h2 className='font-mono'>Total Order Price:{order.totalOrderPrice} EGP</h2>


                 </div>
            </div>
          })}
      </div>
     </div>
  )
}

export default AllOrders 