import React from "react";
import { Link, NavLink } from "react-router";
import mainLogo from "../../assets/main logo.png"

const Navbar = () => {
    const menu = 
        <>
            <li className="text-lg font-medium mr-6">
                <NavLink to='/' className={({isActive})=> isActive? "text-blue-600 border-b-2 rounded-none": ""} >Home</NavLink>
            </li>
            <li className="text-lg font-medium mr-6">
                <NavLink to='/my-bookings' className={({isActive})=> isActive? "text-blue-600 border-b-2 rounded-none": ""} >My-Bookings</NavLink>
            </li>
            <li className="text-lg font-medium mr-6">
                <NavLink to='/blogs' className={({isActive})=> isActive? "text-blue-600 border-b-2 rounded-none": ""} >Blogs</NavLink>
            </li>
            <li className="text-lg font-medium mr-6">
                <NavLink to='/contact-us' className={({isActive})=> isActive? "text-blue-600 border-b-2 rounded-none": ""} >Contact Us</NavLink>
            </li>
        </>
  return (
    <div className="bg-[#0F0F0F20]">
        <div className="navbar px-0 py-4 max-w-[1281px] mx-auto">
            {/* Nav Start */}
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                {" "}
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {
                    menu
                }
            </ul>
            </div>
            <Link to='/'>
                <img src={mainLogo} alt="" />
            </Link>
        </div>
            {/* Navbar Mid */}
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {
                    menu
                }
            </ul>
        </div>
            {/* Navbar End */}
        <div className="navbar-end">
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Emergency</button>
        </div>
        </div>
    </div>
  );
};

export default Navbar;
