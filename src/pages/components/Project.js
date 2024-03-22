import React from 'react';

export default function Project({name, stack, descr, img}) {
  return (
    <div className="project">
      <header >
        This is the project component.
      </header>
      <body>
        <h2>{name}</h2>
        <h3>{stack}</h3>
        <p>{descr}</p>
        <img src={img} alt='Image of project' width={200}/>
      </body>
    </div>
  );
}