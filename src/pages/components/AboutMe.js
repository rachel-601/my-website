import React from 'react';

export default function AboutMe({title, blurb, pos, imgs}) {
  return (
    <div className="p-8">
      <header >
      
      </header>
      <body className={`${(pos === "left") ? "justify-center md:flex flex-row" : "md:flex flex-row-reverse justify-center"}`}>
        <group className='w-1/3 px-8'>
          <div className={`sm:${(pos === "left") ? "text-right" : "text-left"} text-left`}>
            <h2 className="text-3xl tracking-wider">{title}</h2>
            <p>{blurb}</p>
          </div>
        </group>
        <group className="h-img_reg shadow-lg shadow-dark">
          <ul className="flex">
              <li className="h-img_reg overflow-hidden">
                <img src={imgs.one} alt={`"Picture showing ${title}"`} className="w-img_reg h-img_reg object-cover"/>
              </li>
              <li className="h-img_reg overflow-hidden">
                <img src={imgs.two} alt={`"Picture showing ${title}"`} className="w-img_reg h-img_reg object-cover"/>
              </li>
              <li className="hidden sm:flex h-img_reg overflow-hidden">
                <img src={imgs.three} alt={`"Picture showing ${title}"`} className="w-img_reg h-img_reg object-cover"/>
              </li>
          </ul>
        </group>
      </body>
    </div>
  );
}