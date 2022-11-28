import React from 'react'
import "../Style/Product.css"
import img1 from "../Images/sideimg.webp"
import { useStoreData } from '../Context/ProductContext'
import FeatureProduct from './FeatureProduct'
import img2 from "../Images/bgimage2.jpeg"
import AllProduct from './AllProduct'
import Contact from './Contact'


const Product = () => {
  const {featureProducts,isLoading} =useStoreData()
 
if(isLoading){
return <h3>......Loading</h3>
}
     
 
  return (
    <>
     <div className='container-fluid'>
      <div className='row'>
      <div className='col-lg-9'>
      <div className='row'>
      <div className=''>
          <h4 className='ms-3 fw-bold py-3'>Best Deal of the Day</h4>
         </div>
           {
          featureProducts.map((curElem)=>{
            return(
              <>
              <div className='col-lg-4'>
                <FeatureProduct  key={curElem.id} {...curElem} />
              </div>
              </>
            )
          })
        }
           </div>
      
      </div>
      <div className='col-lg-3'>
       <figure>
        <img src={img1} alt="" id="side-img"/>
       </figure>
      </div>
      </div>
      <hr></hr>
      <div className='pb-5 row justify-content-center'>
         <div className='col-lg-10 text-center'>
           <img src={img2} alt="" id="sale-img" />
         </div>
      </div>
     </div>
     <AllProduct/>
     <Contact/>
    </>
  )
}

export default Product