import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { IoMenuSharp } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section'); 
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const windowHeight = window.innerHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight - windowHeight) {
        currentSectionId = section.id;
        console.log(currentSectionId);
      }
    });
    setActiveSection(currentSectionId);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    
    <nav role="" className="fixed w-full bg-gradient-to-b from-black px-5 m-0">
      <div className='flex justify-between p-5'>
        <img alt='logo'/>
        <ol className="hidden md:flex space-x-5">
            <li><Link to="#home" className="transition ease-in-out delay-100 hover:text-hover">Home</Link></li>
            <li><Link to="#about" className="transition ease-in-out delay-100 hover:text-hover">About</Link></li>
            <li><Link to="#projects" className="transition ease-in-out delay-100 hover:text-hover">Projects</Link></li>
            <li><Link to="#contact" className="transition ease-in-out delay-100 hover:text-hover">Contact</Link></li>
        </ol>
        {/* Mobile Nav Icon */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <IoIosClose size={30} /> : <IoMenuSharp size={25} /> }
        </div>
        {/* Mobile Nav Menu */}
        <div className={nav ? "fixed md:hidden text-right right-10 top-16" : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] border-x-dark"}>
          <ol className='bg-white p-5 pr-6 space-y-3 rounded-md'>
              <li><Link to="#home" className="transition ease-in-out delay-100 text-medium hover:text-hover">Home</Link></li>
              <li><Link to="#about" className="transition ease-in-out delay-100 text-medium hover:text-hover">About</Link></li>
              <li><Link to="#projects" className="transition ease-in-out delay-100 text-medium hover:text-hover">Projects</Link></li>
              <li><Link to="#contact" className="transition ease-in-out delay-100 text-medium hover:text-hover">Contact</Link></li>
          </ol>
        </div>
        
      </div>
    </nav>
  );
}