import React from "react"
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import AllProduct from "./Pages/AllProduct";
import BuyProduct from "./Pages/BuyProduct";
import Login from "./Authontication/Login"
import Signup from "./Authontication/Signup";
import ProtectRoute from "./Authontication/ProtectRoute"
import {UserAuthContextProvider} from "./Context/UserAuthContext" 

function App() {
     
      
  return (
    <UserAuthContextProvider>
  <>
  
   
       <BrowserRouter>
      
        <Navbar/>
          <Routes>
          <Route path="/" element={<Login/>}/>
            <Route path="/Sign-up" element={<Signup/>}/>
            <Route path="/home" element={
              <ProtectRoute><Home/></ProtectRoute> 
           }/>
            <Route path="/contact" element={<ProtectRoute><Contact/></ProtectRoute>}/>
            <Route path="/allproduct" element={<ProtectRoute> <AllProduct/></ProtectRoute>}/>
            
            <Route path="/singleproduct/:id" element={<ProtectRoute> <SingleProduct/></ProtectRoute>}/>
            <Route path="/cart" element={<ProtectRoute> <Cart/></ProtectRoute>}/>
            <Route path="/buynow" element={<ProtectRoute> <BuyProduct/> </ProtectRoute>}/>
         </Routes>
          <Footer/>
        
        </BrowserRouter>
      
      
    </>
    </UserAuthContextProvider> 
  );
}

export default App;
