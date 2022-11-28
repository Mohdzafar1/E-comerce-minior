import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext'
import CartItem from "./CartItem"


const Cart = () => {
    const {cart,removeItem,clearCart,total_price, shipping_fee}=useCartContext();
    const {id,name,image,color,price,amount}=cart;
    const [total,setTotal]=useState();
    
       if(cart.length===0){
        return(
          <>
            <div className='row text-center pt-5'>
              <div className='col-lg-12 pt-5'>
              <h4 className='pt-5 display-3'>Cart Empty</h4>
              </div>
            </div>
          </>
        ) 
        
       }
     
  return (
    <div className='container pt-5 pb-5'>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Brand Name</th>
      
      
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
     
      <th scope="col">Remove</th>

    </tr>
  </thead>   
  
   {cart.map((curElem)=>{
      return <>
      <tbody>
        <tr>
      <th scope="row">
           <figure>
               <img src={curElem.image} alt={id} style={{width:"50px",height:"50px"}} key={id} />
           
           </figure>
         </th>
          <td>{curElem.name}</td>
         <td>{curElem.price}</td>
         <td>{curElem.amount}</td>
        
         <td className='text-danger'>
         <i className="fas fa-trash-alt"onClick={()=>removeItem(curElem.id)}></i>
         </td>
         <td>
         <NavLink to="/buynow">
        <button className='btn btn-outline-primary '>Buy Now</button>
       </NavLink>
         </td>
      </tr>
        </tbody>
      </>
        })}
      
     
    
</table>

     <hr></hr>
        <div className='row'>
          <div className='col-lg-6'>
          <NavLink to="/home">
        <button className='btn btn-outline-primary'>Continue Shopping</button>
      </NavLink>
       
          </div>
          <div className='col-lg-6 text-center'>
          <button onClick={clearCart}  className='btn btn-danger'>
             <span> Clear Cart</span>
  
          </button>
   
        </div>
     
        </div>
      
    </div>
  )
}

export default Cart