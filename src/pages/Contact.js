import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
  return (
    <section id="contact" className="h-screen flex items-center">
      <header >
        
      </header>
      <body className="px-10 md:px-20 w-screen">
        <h1 className="text-5xl md:text-7xl text-right pb-5 tracking-widest">contact me!</h1>
        <ol className="flex flex-row-reverse items-center gap-6 pr-10">
          <li >
            <a href='https://www.linkedin.com/in/rachel-shi-04b52720a/' target='_blank' >
              <FaLinkedin size={50} onMouseOver={({target})=>target.style.color='#CFC0E6'} onMouseOut={({target})=>target.style.color='white'}/>
            </a>
          </li>
          <li >
            <a href='https://github.com/rachel-601' target='_blank' >
              <FaGithub size={50} onMouseOver={({target})=>target.style.color='#CFC0E6'} onMouseOut={({target})=>target.style.color='white'}/>
            </a>
          </li>
          <li>
            <a href='mailto:racheljune2004@gmail.com' target='_blank' >
              <IoIosMail size={60} onMouseOver={({target})=>target.style.color='#CFC0E6'} onMouseOut={({target})=>target.style.color='white'}/>
            </a>
          </li>
        </ol>
      </body>
    </section>
  );
}