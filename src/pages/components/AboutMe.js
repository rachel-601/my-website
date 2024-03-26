import React from 'react';

export default function AboutMe({title, blurb, pos, imgs}) {
  return (
    <div className="p-8">
      <header >
      
      </header>
      <body className={`${(pos === "left") ? "justify-center flex flex-row items-center" : "flex flex-row-reverse justify-center items-center"}`}>
        <group className='w-1/3 px-8'>
          <div className={`${(pos === "left") ? "text-right" : "text-left"}`}>
            <h2 className="text-3xl tracking-wider">{title}</h2>
            <p>{blurb}</p>
          </div>
        </group>
        <group className="shadow-lg shadow-dark">
          <ul className="flex">
              <li className="h-about_reg overflow-hidden">
                <img src={imgs.one} alt={`"Picture showing ${title}"`} className="w-about_reg h-about_reg object-cover"/>
              </li>
              <li className="h-about_reg overflow-hidden">
                <img src={imgs.two} alt={`"Picture showing ${title}"`} className="w-about_reg h-about_reg object-cover"/>
              </li>
              <li className="h-about_reg overflow-hidden">
                <img src={imgs.three} alt={`"Picture showing ${title}"`} className="w-about_reg h-about_reg object-cover"/>
              </li>
          </ul>
        </group>
      </body>
    </div>
  );
}