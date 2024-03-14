import React from 'react';

export default function AboutMe({title, blurb, pos, imgs}) {
  return (
    <div className="aboutMe">
      <header >
        This is the about me component.
      </header>
      <body>
        <h2>{title}</h2>
        <p>{blurb}</p>
        <ul>
            <li><img src={imgs.one} alt='Image 1'/></li>
            <li><img src={imgs.two} alt='Image 2'/></li>
            <li><img src={imgs.three} alt='Image 3'/></li>
        </ul>
      </body>
    </div>
  );
}