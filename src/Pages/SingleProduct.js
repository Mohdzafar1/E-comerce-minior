import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useStoreData } from '../Context/ProductContext';
import AddToCart from './AddToCart';
import MyImage from './MyImage';
import PageNavigation from './PageNavigation';


const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
       const {getSingleProduct,isSingleLoading,singleProduct}=useStoreData();

              console.log(singleProduct)
        const{id}=useParams();
      

      
        const {
          id: alias,
          name,
          company,
          price,
          description,
          category,
          stock,
          stars,
          reviews,
          image,
          } =singleProduct;
              
         
              
          useEffect(() => {
            getSingleProduct(`${API}?id=${id}`);
          }, []);
          
            if(isSingleLoading){
              return <h4>....Page Is load</h4>
            }

          
  return (
    <div>
         <PageNavigation title={name}/>
          <div className='container py-5'>
            <div className='row'>
             <div className='col-lg-8'>
             <MyImage imgs={image} />
             </div>
                <div className='col-lg-4'>
                 <h3>{name}</h3>
                 <span className='text-danger'>MRP$ <del>800000</del></span>
                 <p>Deal of the Day ${price}</p>
                 <p>{description}</p>
                 <div className='row justify-content-center'>
                  <div className='col-lg-3'>
                  <span>
                  <i class="fas fa-truck"></i>
                    <p>Free delivery</p>
                  </span>
                  </div>
                  <div className='col-lg-3'>
                  <span>
                  <i class="fas fa-recycle"></i>
                    <p>30 Days Replacement</p>
                  </span>
                  </div>
                  <div className='col-lg-3'>
                  <span>
                  <i class="fas fa-truck"></i>
                    <p>Fastkart Delivery</p>
                  </span>
                  </div>
                  <div className='col-lg-3'>
                  <span>
                  <i class="fas fa-shield-virus"></i>
                    <p>2 Year Warranty</p>
                  </span>
                  </div>
                 </div>
                  <hr></hr>
                  
                  <p> Available:-<span>{stock}</span></p>
                   <p>Brand:-<span>apple</span></p>
                   <hr style={{height:"10px",background:"black"}}></hr>
                    {stock>0 && <AddToCart product={singleProduct}/> }
                </div>
            </div>
          </div>
    </div>
  )
}

export default SingleProduct