import React,{useState} from 'react'
import GoogleButton from 'react-google-button'
import {Link,useNavigate} from "react-router-dom"
import { useUserAuth } from '../Context/UserAuthContext';
import  login from "../Images/login-img-1.gif"


const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
     const[error,setError]=useState("");
    const {loginIn,googleSignIn} =useUserAuth();
    const  navigate=useNavigate();
  
    
  const handleSubmit=async (e)=>{
    e.preventDefault();
    setError("");
    try{
     await loginIn(email,password);
     navigate("/home")
    }catch (err){
     setError(err.message);
    }

} 
const handleGoogleSignIn=async (e)=>{
    e.preventDefault();
    try{
          await googleSignIn();
          navigate("/home");
    }catch(err){
     setError(err.message)
    }

}

  return (
    <>
         <div className='container pb-5'>
         <div className='row justify-content-center py-5'>
             <div className='col-lg-5'>
              <figure>
                 <img src={login} alt="login" style={{width:"100%",height:"100%"}}/>
              </figure>
           </div>
           <div className='col-lg-5 pt-5'>
           <h3 className='fw-bold'> Login</h3>
           {error && <p className='alert alert-danger'>{error}</p>}
           <form onSubmit={handleSubmit}>
            <label className='form-label'>Email:</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text"className='form-control'/><br></br>
            <label className='form-label'>Password:</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password"className='form-control'/><br></br>
            <div><br></br>
                <button className='btn btn-outline-primary w-100' type="Submit">Login In</button>
            </div>
           </form><br></br>
           <div><br></br>
          <GoogleButton onClick={handleGoogleSignIn}
            className="w-100 g-btn"
            type="dark"/>
            </div><br></br>
            <div >
            Don't have an account? <Link to="/sign-up">SignUp</Link>
            </div>
           </div>
         </div>
      </div>
    </>
  )
}

export default Login