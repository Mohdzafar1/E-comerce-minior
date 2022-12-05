import React, { useEffect, useState } from 'react'
import { useStoreData } from '../Context/ProductContext'
import OtherData from "../Pages/OtherData"
import FeatureProduct from './FeatureProduct';

const AllProduct = () => {
 
    const[text,setText]=useState("");

    const changeHandler=(e)=>{
      setText(e.target.value)
    }
   

  const {products,isLoading} =useStoreData();
     
    if(isLoading){
      return <h3>product is load</h3>
    }



  return (

    <div className='container'>
         <h3 className='py-5'>ALL PRODUCTS</h3>
          <div className='row justify-content-center pb-3'>
            <div className='col-lg-5'>
           <input value={text} onChange={changeHandler} type="text"placeholder='Search-now' className='form-control fw-bold shadow-none' />
            </div>

          </div>
         <div className='row'>
         {products.filter((val,price)=>{
          if(text===""){
            return val;
          }else if((val.name.toLowerCase().startsWith(text.toLowerCase())) || (price.price.toLowerCase().startsWith(text.toLowerCase()))) {
            return val;
            }  
         }).map((curElem)=>{
          return(
            <>
              {/* <AllFeatureProduct key={curElem.id} {...curElem} /> */}
             <div className='col-lg-3 py-3'>
             <FeatureProduct  key={curElem.id} {...curElem}/>
             </div>
            </>
          )
         })}
         </div>
         <OtherData/>

    </div>
  )
}

export default AllProduct