import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from "../Reducer/ProductReducer"
import shoeData from '../Data/ShoeData';

const AppProvider=createContext();


const API="https://api.pujakaitem.com/api/products";


 
 const initialState={
   isLoading:false,
   isError:false,
   products:[],
   featureProducts:[],
   isSingleLoading:false,
   singleProduct:{},


  
}

const ProductContext = ({children}) => {


  const [state,dispatch]=useReducer(reducer,initialState)

 
    const getProducts=async (url)=>{
      dispatch({type:"SET_LOADING"})
      try{
        const res= await axios.get(url);
        const products= await res.data;
      dispatch({type:"SET_API_DATA",payload:products})

     }catch(error){
      dispatch({type:"SET_ERROR"})
        
      }
    }
   
      // single product
        
       const getSingleProduct=async (url)=>{
        dispatch({type:"SET_SINGLE_LOADING"})
        try{
          const res=await axios.get(url);
          const singleProduct=await res.data;
          dispatch({type:"SET_SINGLE_PRODUCTS",payload:singleProduct}); 

        }catch(error){
          dispatch({type:"SET_SINGLE_ERROR"})
        }
       }
      
       
       useEffect(()=>{
        getProducts(API)
       
       },[])
    
  return (
    <div>
     <AppProvider.Provider value={{...state , getSingleProduct,getProducts}}>
           {children}
     </AppProvider.Provider>

    </div>
  )
}

// custom hook
  const useStoreData=()=>{
    return useContext(AppProvider);

  }

export  {ProductContext,AppProvider,useStoreData}