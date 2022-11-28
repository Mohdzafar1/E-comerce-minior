import React from 'react'

const Cart_Reducer = (state,action) => {
 if(action.type==="ADD_TO_CART"){
    let {id,color,amount,product}=action.payload;
    // console.log(product)

    
     let cartProduct;
     cartProduct={
        id:id+color,
        name:product.name,
        color,
        amount,
        image:product.image[0].url,
        price:product.price,
        max:product.stock,

     }
     
    return{
        ...state,
        cart:[...state.cart,cartProduct]
    }
 }

 if(action.type==="REMOVE_ITEM"){
   let updateCart=state.cart.filter((curItem)=>curItem.id !== action.payload)
 
   return{
      ...state,
      cart:updateCart,
}
}

// cart empty
if(action.type==="CLEAR_CART"){
   return{
      ...state,
      cart:[],
   }
}

if(action.type==="CART_TOTAL_PRICE"){
   // let{total_price}=
   let total_price=state.cart.reduce((initialVal,curElem)=>{
    let {price,amount}=curElem;
    initialVal=initialVal+price*amount;

    return initialVal;
   },0)
   return{
      ...state,
      total_price,
   }
}


  return state
    
  
}

export default Cart_Reducer