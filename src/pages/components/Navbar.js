import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

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

  return (
    
    <nav role="navigation" className="fixed w-full bg-gradient-to-b from-black">
      <div className='container mx-auto flex justify-between p-5'>
        <img alt='logo'/>
        <ol className="flex space-x-5">
            <li><Link to="#home" className={`"text-medium"`}>Home</Link></li>
            <li><Link to="#about" className="hover:text-hover">About</Link></li>
            <li><Link to="#projects" className="hover:text-hover">Projects</Link></li>
            <li><Link to="#contact" className="hover:text-hover">Contact</Link></li>
        </ol>
      </div>
    </nav>
  );
}