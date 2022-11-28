import React from 'react'
import CartAmoutToggle from './CartAmoutToggle'

const CartItem = ({id,name,image,color,price,amount}) => {
   
  return (
    <div>
       
     
       
         <th scope="row">
           <figure>
               <img src={image} alt={id} style={{width:"50px",height:"50px"}} key={id} />
           <p>color:<p style={{backgroundColor: color, color: color}}></p></p>
           </figure>
         </th>
          <td>{name}</td>
         <td>{price}</td>
         <td>{amount}</td>
         <td>{price*amount}</td>
         <td className='text-danger'>
         <i class="fas fa-trash-alt"></i>
         </td>
   
       
       
    </div>
  )
}

export default CartItem