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
            <li><img src={imgs.one} alt={`"Picture showing ${title}"`} width={200}/></li>
            <li><img src={imgs.two} alt={`"Picture showing ${title}"`} width={200}/></li>
            <li><img src={imgs.three} alt={`"Picture showing ${title}"`} width={200}/></li>
        </ul>
      </body>
    </div>
  );
}