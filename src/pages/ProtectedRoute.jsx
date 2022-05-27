import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

function ProtectedRoute({children}) {
    const {loggedIn} = useAuth();
    if(!loggedIn) return 
    return loggedIn ? children : <Navigate to="/" /> 
}

export default ProtectedRoute