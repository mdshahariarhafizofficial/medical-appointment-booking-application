import React from "react";
import mainLogo from "../../assets/main logo.png"
import { NavLink } from "react-router";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const FooterMenu = 
    <>
        <li className="text-lg font-medium">
            <NavLink to='/' className={({isActive})=> isActive? "text-blue-600 border-b-2 rounded-none pb-2": ""} >Home</NavLink>
        </li>
        <li className="text-lg font-medium">
            <NavLink to='/my-bookings' className={({isActive})=> isActive? "text-blue-600 border-b-2 rounded-none pb-2": ""} >My-Bookings</NavLink>
        </li>
        <li className="text-lg font-medium">
            <NavLink to='/blogs' className={({isActive})=> isActive? "text-blue-600 border-b-2 rounded-none pb-2": ""} >Blogs</NavLink>
        </li>
        <li className="text-lg font-medium">
            <NavLink to='/contact-us' className={({isActive})=> isActive? "text-blue-600 border-b-2 rounded-none pb-2": ""} >Contact Us</NavLink>
        </li>
    </>

  return (
    <footer className="footer footer-horizontal footer-center text-base-content rounded p-10">
      <div>
        <img className="mx-auto" src={mainLogo} alt="" />
      </div>
      <nav className="grid md:grid-cols-4 gap-4 list-none">
            {
                FooterMenu
            }
      </nav>
      <div className="border-t-2 border-gray-300 w-full md:w-[50%] "></div>
      <nav>
        <div className="grid grid-flow-col gap-6">
          <a href="https://www.facebook.com/mdshahariarhafizofficial" target="_blank">
            <FaFacebook size={30} color="#176AE5" />
          </a>
          <a href="https://github.com/mdshahariarhafizofficial" target="_blank">
            <FaGithub size={30} />
          </a>
          <a href="https://x.com/mdshahariarhafizofficial" target="_blank">
            <FaTwitter size={30} color="#176AE5" />
          </a>
          <a href="https://youtube.com/mdshahariarhafizofficial" target="_blank">
            <FaYoutube size={30} color="red" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
