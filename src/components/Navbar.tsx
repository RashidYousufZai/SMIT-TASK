import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../components/logo.png"
import "../index.css"


const active: React.CSSProperties = {
  backgroundColor: "#5cb85c",
  marginBottom: "10px",
  alignSelf: "center",
  color: "#fff",
  borderColor: "#4cae4c",
  padding: "10px 16px",
  fontSize: " 18px",
  lineHeight: "1.3333333",
}

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='border'>
      <div className='drop-shadow-xl  flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-black '>
        <h1 className=''><img className='h-[45px]' src={logo} alt="" /></h1>
        <ul className='hidden md:flex'>
          <li className='p-4'><NavLink className="navbar-link" to="/"> Home </NavLink></li>
          <li className='p-4'><NavLink className="navbar-link" to="/media"> Media </NavLink></li>
          <li className='p-4'><NavLink className="navbar-link" to="/course"> Cources </NavLink></li>
          <li className='p-4'><NavLink className="navbar-link" to="/about-us"> About us </NavLink></li>
          <li className='p-4'><NavLink className="navbar-link" to="/cirtificate"> Cirtificate </NavLink></li>
          <li className='p-4 text-black border-[#0d6efd] bg-[#8dc63f] rounded-[0.25rem] '><NavLink className="navbar-link" to="/donate"> Donate </NavLink></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;