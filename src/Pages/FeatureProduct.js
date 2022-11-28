import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Style/FeatureProduct.css"


const FeatureProduct = (curElem) => {
        const {id,name,price,image,category} =curElem;
        
       
  return (
    <div>   
        
         <NavLink to={`/singleproduct/${id}`}>
          <div className='container'>
            <div className='card'>
               <div className='card-img-top'>
                <figure>
                  <img src={image}  alt="file" id="product-img"/>
                </figure>
               </div>
               <div className='card-body'>
                <h5>{name}</h5>
                <p>{price}</p>
                <p>{category}</p>
               </div>
            </div>
          </div>
         </NavLink>
    </div>
  )
}

export default FeatureProduct