import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav role="navigation" className=''>
      <img alt='logo'/> 
        <ol class="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ol>
    </nav>
  );
}