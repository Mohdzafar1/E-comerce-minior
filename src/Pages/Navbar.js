import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../Style/Navbar.css"
import { useUserAuth } from '../Context/UserAuthContext'
import cart from "../Images/cart1.gif"


const Navbar = () => {
    const {user,logOut}=useUserAuth();
    const handleLogOut=async ()=>{
      try{
                await logOut();
      }catch(err){
      console.log(err.message)
      }
    }
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{background:"#47B5FF"}}>
  <div className="container">
    <Link className="navbar-brand fw-bold" to="/home">
    <i class="fas fa-store fa-2x"></i><span className='text-light'>Kart</span><span className='text-danger'>Shop</span>

    </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to="/home">Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active fw-bold" to="#">About</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link active fw-bold" to="/allproduct">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fw-bold" to="/contact">Contact us</Link>
        </li>
      </ul>
    </div>
    <div className='me-5 '>
     <NavLink to="/cart">
     <img src={cart} alt="cart-file" style={{width:"50px" ,height:"50px",background:"#47B5FF"}}/>
     {/* <i class="fas fa-cart-plus fa-2x text-light"></i>  */}
     <span>cart</span> 
     </NavLink>
    </div>
    <div>
    
      <div>
      <span>
      {user && user.emai}
      </span>
        <button onClick={handleLogOut} className='btn btn-light ms-2'>Log Out</button>
      
      </div>
    </div>
    <div>
    </div>
   
  </div>

</nav>
    </div>
  )
}

export default Navbar