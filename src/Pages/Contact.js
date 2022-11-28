import React from 'react'
import "../Style/Contect.css"
import img1 from "../Images/contact-img.jpg"

const Contact = () => {
  return (
    <div>
          <div>
         <section id="bg-black">
         <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h1 className='display-4 text-warning fw-bold'>Contact us</h1>
           
          </div>
        </div>
          <div className="row text-center">
            <div className="col-lg-3 py-5">
            <i class="fas fa-map-marker fa-3x text-warning py-3" id="contact-icon"></i>
            <h6 className='text-dark pt-3'>ADDRESS</h6>
            <p className="text-dark">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-lg-3 py-5">
            <i class="fas fa-phone-alt fa-3x text-warning py-3" id="contact-icon"></i>
            <h6 className='text-dark pt-3'>PHONE NUMBER</h6>
            <p className="text-dark">+9182 54789 5120</p>
            </div>
            <div className="col-lg-3 py-5">
            <i class="fas fa-paper-plane fa-3x text-warning py-3" id="contact-icon"></i>
            <h6 className='text-dark pt-3'>EMAIL ADDRESS</h6>
            <p className="text-dark">mohdzafar@gamil.com</p>
            </div>
            <div className="col-lg-3 py-5">
            <i class="fas fa-globe-asia fa-3x text-warning py-3" id="contact-icon"></i>
            <h6 className='text-dark pt-3'>WEBSITE</h6>
            <p className="text-dark">www.Myportfolio.com</p>
            </div>
          </div>

           {/* add form */}
           <div className="row pb-5  pt-3 justify-content-center">
           
             <div className="col-lg-5 color">
               <figure>
                <img src={img1} alt="file" id="contact-img"/>
               </figure>
            </div>
             <div className="col-lg-5 bg-light">
                    <form action="https://formspree.io/f/xpznkvve" method="POST" className="pt-5">
                      <input type="text"placeholder='Your Name'required autoComplete='off'className='form-control shadow-none' name="username"/><br></br>
                      <input type="email"placeholder='YourEmail'required autoComplete='off'className='form-control shadow-none' name="useremail"/><br></br>
                      <input type="text"placeholder='Subject'required autoComplete='off'className='form-control shadow-none' name="subject"/><br></br>
                      <textarea name="Message" cols="30" rows="10" placeholder='Enter Your Messages' className='form-control shadow-none'/><br></br>
                      <input type="submit"value="Send Message" className='btn btn-warning' id=""/>
                    </form>
             </div>
             
           </div>

{/* add google map */}
  
           
       </div>
         </section>
    </div>
    </div>
  )
}

export default Contact