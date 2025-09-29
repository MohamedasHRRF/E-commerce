"use client"
import { AddToCartAction } from "@/CartActions/AddToCart";
import { clearCartAction } from "@/CartActions/clearCart";
import { getUsersCartAction } from "@/CartActions/getUsersCart";
import { removeCartItemAction } from "@/CartActions/removeCartItem";
import {  updateCartAction } from "@/CartActions/updateCart";
import { Cart } from "@/types/cart.type";
import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext({});

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [cartId, setCartId] = useState("")

  const [isLoading, setIsLoading] = useState(false);



  async function addProductToCart(id:string){  
    try {
       const data = await AddToCartAction(id)
       
        getUserCart()
       return data
    }
     catch (error) {
      return error;
    }
}


 async function removeCartItem(id:string) { 


    try {
      const data: Cart = await removeCartItemAction(id)
      setNumOfCartItems(data.numberOfCartItems)
      setProducts(data.data.products)
      setTotalCartPrice(data.data.totalCartPrice)
      return data
    } 
    catch (error) {
      console.log(error);
    }
  }


  async function updateCart(id:string, count:number) {
    try {
      const data= await updateCartAction(id, count)
      setNumOfCartItems(data.numberOfCartItems)
      setProducts(data.data.products)
      setTotalCartPrice(data.data.totalCartPrice)
      return data
      
    } 
    
    catch (error) {
      console.log(error)
    }
  }



async function clearCart() {
    try {
      const data= await clearCartAction()
      setNumOfCartItems(0)
      setProducts([])
      setTotalCartPrice(0)
      return data
      
    } 
    
    catch (error) {
      console.log(error)
    }
  }


  async function getUserCart() {
    setIsLoading(true)

    try {
      const data:Cart = await getUsersCartAction()
      setNumOfCartItems(data.numberOfCartItems)
      setProducts(data.data.products)
      setTotalCartPrice(data.data.totalCartPrice)

      setCartId(data.cartId)

      setIsLoading(false)

    } 
    catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(function () {
    getUserCart();
  }, [])




  function afterPayment(){
    setCartId("")
    setNumOfCartItems(0)
      setProducts([])
      setTotalCartPrice(0)
  }
  return (
    <cartContext.Provider
      value={{
        numOfCartItems,
        totalCartPrice,
        products,
        isLoading,
        addProductToCart,
        removeCartItem,
        updateCart,
        clearCart,
        cartId,
        afterPayment, 
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
