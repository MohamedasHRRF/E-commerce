"use client";
import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './../../../../public/screens/freshcart-logo.svg'
import { cartContext } from '@/Context/CartContext'
import { Badge } from "@/components/ui/badge"
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {

 const { data: session, status } = useSession();


  const {numOfCartItems} = useContext(cartContext)
  return (
    <>   
     <div className='bg-slate-100 py-5 '>
        <div className='  w-full md:w-[80%] mx-auto  flex flex-col justify-between items-center md:flex-row text-center gap-2 '>

                <ul className='flex flex-col  md:flex-row text-center gap-6 '>
 {status === 'authenticated' && <>
 
     <li>
        <Link href="/" >
        <Image src={logo} alt="freshcart logo" />
        </Link> 

    </li>

    <li>
        <Link href="/categories">
        Categories 
        </Link>
    </li> 

        <li>
        <Link href='/brands'>
        Brands
        </Link>
    </li>
    
    <li>
        <Link href='/allorders'>
        Orders
        </Link>
    </li>

        <li className='relative'>
        <Link href="/cart">
        Cart 
        <Badge className="absolute -top-[40%] ">
               {numOfCartItems}
        </Badge>
     
        </Link>
    </li>

     
 </>}
      {status === 'unauthenticated' && <>
		<Image
			src={logo}
			alt='freshcart-logo'
		/>
		</>}
   


	{status === 'loading' && <h1>Loading...</h1>}
                </ul>


        <div className='flex flex-col  md:flex-row text-center gap-2 '>
            {status === 'authenticated' && <><div>
           <li>
			<button className='cursor-pointer' onClick={()=> signOut({
				callbackUrl: `/login`
			})}>Logout</button>
			</li>
         </div>
         <div>
            <h1 className='text-green-600'> welcome back {session.user.name}</h1>
         </div>
         
         </>}


            {status === 'unauthenticated' && <> 
            <div>
         <Link href="/login">
        Login
        </Link>
        </div>

        
        <div>
            <Link href="/register">
        register
        </Link>
        </div></>}


       
         
         

     
        </div>



        </div>

    </div>
    </>
  )
}

export default Navbar