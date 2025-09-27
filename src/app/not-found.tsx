import React from 'react'
import Image from 'next/image'
import errorphoto from './../../public/screens/404.jpg'
const Error = () => {
  return (
    <div className='w-full  md:w-[80%] mx-auto  px-5 my-5 md:p-0 '>
      <Image src={errorphoto} alt='not founf'/>
    </div>
  )
}

export default Error