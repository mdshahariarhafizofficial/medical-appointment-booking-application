import React from "react";
import Navbar from "../../Components/Header/Navbar";
import img404 from "../../assets/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg"
import { Link, useLocation } from "react-router";

const NotFound = () => {
    const loc = useLocation();
    const {pathname}= loc;
    
    
  return (
    <>
      <Navbar></Navbar>
    <div className="text-center space-y-4">
        <img className="w-[600px] mx-auto" src={img404} alt="" />
        <p className="text-lg font-semibold">{pathname}</p>
        <h2 className="text-5xl font-extrabold text-red-500">404 Page Not Found</h2>
        <p className="text-lg font-semibold">!Oops The page you're looking for doesn't exist.</p>
        
        <Link to='/'>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Go Back Home</button>
        </Link>
    </div>
    </>
  );
};

export default NotFound;
