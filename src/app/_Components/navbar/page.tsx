import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './../../../../public/screens/freshcart-logo.svg'

const Navbar = () => {
  return (
    <>   
     <div className='bg-slate-100 py-5 '>
        <div className='  w-full md:w-[80%] mx-auto  flex flex-col justify-between items-center md:flex-row text-center gap-2 '>

<ul className='flex flex-col  md:flex-row text-center gap-6 '>
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
        Brand
        </Link>
    </li>

        <li>
        <Link href="/cart">
        Cart
        </Link>
    </li>

        <li>
        <Link href="/orders">
        Orders
        </Link>
    </li>


</ul>


<div className='flex flex-col  md:flex-row text-center gap-2 '>


     <div>
        <i className='fab mx-2 fa-facebook-f '></i>
        <i className='fab mx-2 fa-youtube '></i>
        <i className='fab mx-2 fa-linkedin '></i>
        <i className='fab mx-2 fa-paypal '></i>



     </div>

     <div>
         <Link href="/login">
        Login
        </Link>
        </div>
        <div>
            <Link href="/register">
        register
        </Link>
        </div>
         
         <div>
            <button>logout</button>
         </div>

     
</div>
</div>

    </div></>
  )
}

export default Navbar