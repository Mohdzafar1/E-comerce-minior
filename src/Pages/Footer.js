import React from 'react'
import {NavLink} from "react-router-dom"

const Footer = () => {
  return (
    <div>
        <>
        <div id="footer"className='' style={{background:"black"}}>
        <footer className=''>
            <div className="container">
                <div className="row pb-3 pt-3 text-center">
                    <div className="col-lg-4 pt-3">
                    <i class="fab fa-facebook-f fa-2x text-primary"></i>
                    </div>
                    <div className="col-lg-4  pt-3 ">
                    <i class="fab fa-twitter fa-2x text-light primary"></i>
                    </div>
                    <div className="col-lg-4  pt-3 ">
                    <i class="fab fa-instagram fa-2x text-danger"></i>
                    </div>
                </div>
                <hr className='text-light'></hr>
               <div className="row text-light text-center pt-3 pb-5">
                 <div className="col-lg-4 pt-3 pb-3">
                   <h1 className='fw-bold'>OUR SERVICES</h1>
                   <p>WEB DEVELOPMENT</p>
                   <p>WEB DESIGN</p>
                   <p>RESPONSIVE DESIGN</p>
                 </div>
                 <div className="col-lg-4 pt-3 pb-3">
                   <h1 className='fw-bold'>OUR TEAM</h1>
                   <NavLink to="/team">Team member</NavLink>
                 </div>
                 <div className="col-lg-4 pb-3 pt-3">
                   <h1 className='fw-bold'>CONTACT US</h1>
                   <p>Address:  kichha, Nai Basti ward no-11</p>
                   <p>Udham Singh Nagar, UK, 263148, India</p>
                   <p>Contact No: 01001010101, 12121212121</p>
                   <i class="fas fa-envelope"></i><span className='ms-3'>mohdzafar97597@gmail.com</span><br></br>
                   <NavLink to="">Send Messages</NavLink>
                 </div>
               </div>
               <hr className='text-light'></hr>
                <div className="row">
                  <div className="col-lg-12 text-center text-light">
                    <p>© Copyright 2022-2030 www.E-shop.com. All rights reserved. Developed by    <a href="https://www.linkedin.com/in/mohd-zafar-8197b3216/">Mohd Zafar</a></p>
                  </div>
                </div>

            </div>
              
           </footer>  
          </div>
        </>
    </div>
  )
}

export default Footer