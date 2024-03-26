import React from 'react';

export default function Project({name, stack, descr, img}) {
  return (
    <div className="py-6">
      <header >

      </header>
      <body className="flex justify-center items-center">
        <div className='h-img_reg w-img_reg overflow-hidden shadow-lg shadow-dark'>
          <img src={img} alt='Image of project' className="w-img_reg h-img_reg object-cover "/>
        </div>
        <group className="w-1/2 text-left pl-6">
          <h2 className="text-3xl">{name}</h2>
          <h3 className="font-semibold py-2">{stack}</h3>
          <p>{descr}</p>
        </group>
      </body>
    </div>
  );
}