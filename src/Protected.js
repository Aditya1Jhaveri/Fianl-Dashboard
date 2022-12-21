import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
const Protected = (children) => {
    const response = localStorage.getItem("response");

    if(!response)
    {
        return <Navigate to="/Navbar" replace />
     }
    // else{
    //     return <Navigate to="/Navbar" replace />

    // }
    // return (
    //     <div>
    //     return <Navigate to="/Navbar" replace />

    //     </div>
    // )
}

export default Protected;