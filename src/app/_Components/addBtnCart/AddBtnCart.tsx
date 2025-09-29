"use client"
 
 import { Button } from '@/components/ui/button';
 import { cartContext } from '@/Context/CartContext';
import React, { useContext } from 'react';
import { toast } from 'sonner';
// function
const AddBtnCart = ({id}:{id:string}) => {



const {addProductToCart}= useContext(cartContext)



    async function handleAddToCart(){
       const data= await addProductToCart(id)
       console.log(data)

       if(data.status==="success"){
            toast.success(data.message,{duration:2000,position:"top-center"});
       }else{
            toast.error("Failed to add product in cart",{duration:2000,position:"top-center"});
       }
    }


	return (
		<div>
			<Button onClick={handleAddToCart} variant="default" className='w-full flex justify-between'> Add to cart <i className="fa-solid fa-cart-plus"></i> </Button>
		</div>
	);
}

export default AddBtnCart;