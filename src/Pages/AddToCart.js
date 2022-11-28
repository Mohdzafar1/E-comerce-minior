import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import "../Style/AddToCart.css"
import CartAmoutToggle from './CartAmoutToggle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddToCart = ({product}) => {
   
     const {addToCart}=useCartContext()
   
    const {id,colors,stock} =product;
    const [color,setColor]=useState(colors[0])
     
     const [amount,setAmount]=useState([1])

     const setDecrease=()=>{
        amount >1 ? setAmount(amount-1) :setAmount(1);

     }
     const setIncrease=()=>{
        amount < stock ? setAmount(amount+1) :setAmount(stock);
     }


 
    //  message box
    const notify = () => toast("Wow so easy!");
  return (
   

    <div>
      
        {/* add to cart button */}
        <CartAmoutToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
        />
         
         <NavLink to="/cart" className="pb-5"
         onClick={()=>addToCart(id,color,amount,product)}
         >
              <button className='btn btn-outline-danger'onClick={()=>notify} >Add to Cart</button>
              <ToastContainer />
         </NavLink>
    </div>
  )
}

export default AddToCart