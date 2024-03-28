import React from 'react';

export default function Project({name, stack, descr, img, link}) {
  return (
    <div className="py-6">
      <header >

      </header>
      <body className="lg:flex justify-center">
        <div className='h-img_reg w-img_reg overflow-hidden shadow-lg shadow-dark'>
          <a href={link} target='_blank'>
            <img src={img} alt='Image of project' className="w-img_reg h-img_reg object-cover "/>
          </a>
        </div>
        <group className="w-1/2 text-left pl-6">
          <a href={link} target='_blank'>
            <h2 className="text-3xl transition ease-in-out delay-100 hover:text-hover">{name}</h2>
          </a>
          <h3 className="font-semibold py-2">{stack}</h3>
          <p>{descr}</p>
        </group>
      </body>
    </div>
  );
}