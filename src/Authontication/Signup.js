import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext';

const Signup = () => {
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");
    const[error,setError]=useState("");
   const {signUp} =useUserAuth();
   const  navigate=useNavigate();
  
    const handleSubmit=async (e)=>{
           e.preventDefault();
           setError("");
           try{
            await signUp(email,password);
            navigate("/")
           }catch (err){
            setError(err.message);
           }

     } 
    
  return (
    <>
   <div className='container py-5'>
         <div className='row justify-content-center py-5'>
           <div className='col-lg-5'>
           <h3 className="fw-bold"> Signup</h3>
           {error && <p className='alert alert-danger'>{error}</p>}
           
             <form onSubmit={handleSubmit}>
            <label className='form-label'>Email:</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text"className='form-control'/><br></br>
            
            <label className='form-label'>Password:</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password"className='form-control'/><br></br>
            <div>
                <button className='btn btn-outline-primary w-100' type="Submit">Sign Up</button>
            </div>
           </form><br></br>
           <div  className='pb-5'>
              Already have an account ? <Link to="/">Login In</Link>
            </div>
           </div>
         </div>
      </div>
    </>
  )
}

export default Signup