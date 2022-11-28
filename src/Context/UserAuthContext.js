import React, { createContext, useContext, useEffect, useState } from "react";
import {
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged,
     GoogleAuthProvider,
     signInWithPopup,
 
} from "firebase/auth";
import {auth} from "../Authontication/firebase"


const userAuthContext=createContext()

export function UserAuthContextProvider({children}){
     
     const [user,setUser]=useState("");
    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    function loginIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

       function logOut(){
        return signOut(auth);
       }

      function googleSignIn(){
        const googleAuthProvider=new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider)
      }
        

    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
             setUser(currentUser);
    });
    return()=>{
        unsubscribe();
    }
    },[])
     

 return <userAuthContext.Provider value={{auth,user,signUp,loginIn,logOut,googleSignIn}}>{children}</userAuthContext.Provider>
     
}

// custom hook
export function useUserAuth(){
    return useContext(userAuthContext);
}