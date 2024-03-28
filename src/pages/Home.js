import React from 'react';
import mainIMG from "../images/main.jpg"

export default function Home() {
  return (
    <section id="home" className="h-screen flex items-center">
      <header >
        
      </header>
      <body className="flex px-10 md:px-20 w-screen justify-center items-center">
        <group className="text-left pr-5 w-auto">
          <h1 className="sm:text-7xl text-7xl pb-5 tracking-widest">
            rachel shi
          </h1>
          <p className='tracking-wider'>developer • vancouver foodie • runner • hiker • show binger • learner • snowboarder • gym goer • frisbee player • reader • cook • baker</p>
        </group>
        <group className="hidden md:flex h-mdh w-mdw overflow-clip items-center">
          <img className="md:w-mdw object-cover" src= {mainIMG} alt='Photo of Rachel in Stanley Park'/>
        </group>
      </body>
    </section>
  );
}