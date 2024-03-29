import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { IoMenuSharp } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import logo from '../../images/RS.png';

export default function Navbar() {

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    
    <nav role="" className="fixed w-full bg-gradient-to-b from-black px-5 m-0">
      <div className='flex justify-between p-5'>
        <Link to="#home"><img src={logo} alt='logo' width={60}/></Link>
        <ol className="hidden md:flex space-x-5 text-xl">
            <li><Link to="#home" className="transition ease-in-out delay-100 hover:text-hover">HOME</Link></li>
            <li><Link to="#about" className="transition ease-in-out delay-100 hover:text-hover">ABOUT</Link></li>
            <li><Link to="#projects" className="transition ease-in-out delay-100 hover:text-hover">PROJECTS</Link></li>
            <li><Link to="#contact" className="transition ease-in-out delay-100 hover:text-hover">CONTACT</Link></li>
        </ol>
        {/* Mobile Nav Icon */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <IoIosClose size={30} /> : <IoMenuSharp size={25} /> }
        </div>
        {/* Mobile Nav Menu */}
        <div className={nav ? "fixed md:hidden text-right right-10 top-16" : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] border-x-dark"}>
          <ol className='bg-white p-5 pr-6 space-y-3 rounded-md'>
              <li><Link to="#home" className="transition ease-in-out delay-100 text-medium hover:text-hover">HOME</Link></li>
              <li><Link to="#about" className="transition ease-in-out delay-100 text-medium hover:text-hover">ABOUT</Link></li>
              <li><Link to="#projects" className="transition ease-in-out delay-100 text-medium hover:text-hover">PROJECTS</Link></li>
              <li><Link to="#contact" className="transition ease-in-out delay-100 text-medium hover:text-hover">CONTACT</Link></li>
          </ol>
        </div>
        
      </div>
    </nav>
  );
}