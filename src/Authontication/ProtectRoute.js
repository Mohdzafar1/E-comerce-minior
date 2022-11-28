import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth,auth } from '../Context/UserAuthContext';

const ProtectedRoute = ({children}) => {
  const {user}=useUserAuth();
       let auth=false;

       if(!user && !auth){
        return <Navigate to="/"/>;
       }

   return children;
};

export default ProtectedRoute