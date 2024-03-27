import React from 'react';
import gitPNG from '../images/github.png';
import linkedPNG from '../images/linkedin.png';
import mailPNG from '../images/mail.png';

export default function Contact() {
  return (
    <section id="contact" className="h-screen flex items-center">
      <header >
        
      </header>
      <body className="px-20 w-screen">
        <h1 className="text-7xl text-right pb-5 tracking-widest">contact me!</h1>
        <ol className="flex flex-row-reverse items-center gap-6 pr-10">
          <li>
            <a href='https://www.linkedin.com/in/rachel-shi-04b52720a/' target='_blank' ><img src={linkedPNG} alt="Link to Rachel's LinkedIn page"/></a>
          </li>
          <li>
            <a href='https://github.com/rachel-601' target='_blank' ><img src={gitPNG} alt="Link to Rachel's GitHub page"/></a>
          </li>
          <li>
            <a href='mailto:racheljune2004@gmail.com' target='_blank' ><img src={mailPNG} alt="Link to send Rachel an email"/></a>
          </li>
        </ol>
      </body>
    </section>
  );
}