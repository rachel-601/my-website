import React from 'react';
import mainIMG from "../images/main.jpg"

export default function Home() {
  return (
    <section id="home" className="h-screen flex items-center">
      <header >
        
      </header>
      <body className="flex px-20 w-screen items-center">
        <group className="text-left h-40 pr-5">
          <h1 className="text-7xl pb-5 tracking-widest">
            rachel shi
          </h1>
          <p className='tracking-wider'>developer • vancouver foodie • runner • hiker • show binger • learner • snowboarder • gym goer • frisbee player • reader • cook • baker</p>
        </group>
        <group className="flex h-photo overflow-clip items-center">
          <img className="" src= {mainIMG} alt='Photo of Rachel in Stanley Park' width={400}/>
        </group>
      </body>
    </section>
  );
}