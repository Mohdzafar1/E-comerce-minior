import React, { createContext, useReducer, useContext, useEffect } from 'react'
import reducer from "../Reducer/Cart_Reducer"

const CartContext=createContext();
  
 const getLocalCartData=()=>{
    let localCartData=localStorage.getItem("zafar");
    if(localCartData === []){
        return [];
    }
    else{
        return JSON.parse(localCartData)
    }

 }

const initialState={
    cart:[],
    // cart:getLocalCartData(),
    total_item:"",
    total_price:"",
    shipping_fee:5000

}

const CartProvider = ({children}) => {
 
     const[state,dispatch]=useReducer(reducer,initialState);

      
     const addToCart=(id,color,amount,product)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}})
     }
      
     const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
     }
    //  local storage for cart data
    // to method in local storage get and set


useEffect(()=>{
     dispatch({type:"CART_TOTAL_ITEM"})
    localStorage.setItem("zafar",JSON.stringify(state.cart))
},[state.cart]);

// clear all data into cart
const clearCart=()=>{
    dispatch({type:"CLEAR_CART"})
 }   
  return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart}}>{children}</CartContext.Provider>
}

// global context hook

const useCartContext=()=>{
    return useContext(CartContext)

}

export  {CartProvider,CartContext,useCartContext}