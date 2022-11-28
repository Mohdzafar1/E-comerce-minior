import React from 'react'
import img1 from "../Images/card_img.png"

const BuyProduct = () => {
  return (
    <div className='container py-5'>
       <div className='row justify-content-center'>
         <div className='col-lg-8 justify-content-center'>
           <div className='row  justify-content-center'>
            <div className='col-lg-4'>
             <h4>Shipping Address</h4>
             <form action="">
              <label className='form-label'>Full Name</label>
              <input type="text"className='form-control' required autoComplete='off'></input>
              <label className='form-label'>Email</label>
              <input type="email"className='form-control' required autoComplete='off'></input>
              <label className='form-label'>Address</label>
              <input type="text"className='form-control' required autoComplete='off'></input>
              <label className='form-label'>City</label>
              <input type="text"className='form-control' required autoComplete='off'></input>
               <div className='row'>
                 <div className='col-lg-6'>
                 <label className='form-label'>State</label>
                 <select class="form-select" aria-label="Default select example">
  <option selected>Chose State</option>
  <option value="1">Uttarakhand</option>
  <option value="2">UP</option>
  <option value="3">MP</option>
</select>
                 </div>
                 <div className='col-lg-6'>
                  <label className='form-label'>Zip Code</label>
                  <input type="number" className='form-control'/>
                 </div>
               </div>
             </form>
            </div>
            <div className='col-lg-4'>
                 <h4>PAYMENT</h4>
                 <h6>Accepted Card</h6>
                 <img src={img1} alt='' style={{width:"250px",height:"40px" }}/>
                 <label className='form-label'>Name on Card:</label>
                 <input type="text"placeholder='MOHD ZAFAR' className='form-control' required autoComplete='off'/>
                 <label className='form-label'>Credit Card Number:</label>
                 <input type="text"placeholder='1111-2222-3333-4444' className='form-control' required autoComplete='off'/>
                 <label className='form-label'>Exp Month:</label>
                 <select class="form-select" aria-label="Default select example">
                <option selected>January</option>
                <option value="1">Feb</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">Aug.</option>
                <option value="8">Sept.</option>
                <option value="9">Oct.</option>
                <option value="10">Nov.</option>
                <option value="11">Dec.</option>
              

                </select>
                  <div className='row'>
                   <div className='col-lg-6'>
                   <label className='form-label'>Exp Year</label>
                <select class="form-select" aria-label="Default select example">
               <option selected>2020</option>
               <option value="1">2023</option>
               <option value="2">2024</option>
               <option value="3">2025</option>
              </select>
                   </div>
                   <div className='col-lg-6'>
                       <label className='form-label'>CVV:</label>
                       <input type="text"placeholder='321' className='form-control'/>
                   </div>
                  </div>
            </div>
           </div>
            
           <div className='py-3 text-center '>
        <button className='btn btn-outline-success w-50 '>Continue</button>
       </div>
         </div>

        
       </div>
       
    </div>
  )
}

export default BuyProduct