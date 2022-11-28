import React from 'react'
import "../Style/CartAmountToggle.css"

const CartAmoutToggle = ({amount,setDecrease,setIncrease}) => {
  return (
    <div className='pb-5 pt-2'>
         <button className='me-2' id="btn2" onClick={()=>setDecrease()}>
         <i class="fas fa-minus"></i>
         </button>
          {amount}
         <button className='ms-2' id="btn1" onClick={()=>setIncrease()}>
         <i class="fas fa-plus"></i>
         </button>

    </div>
  )
}

export default CartAmoutToggle