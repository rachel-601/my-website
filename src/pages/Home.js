import React from 'react';
import mainIMG from "../images/main.jpg"
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"


export default function Home() {
  return (
    <section id="home" className="h-screen flex items-center">
      <header >
        
      </header>
      <body className="flex px-10 md:px-20 w-screen justify-center items-center">
        <group className="text-left pr-5 w-auto">
          <h1 className="text-8xl pb-5 tracking-wider">
            rachel shi
          </h1>
          <TypeAnimation
            sequence={"developer • vancouver foodie • runner • hiker • show binger • learner • snowboarder • gym goer • frisbee player • reader • cook • baker ..."}
            wrapper="p"
            speed={80}
            className='tracking-wider'
            repeat={0}
            style={{fontSize: '16pt'}}
          />
        </group>
        <group className="hidden md:flex h-mdh w-mdw overflow-clip items-center">
          <motion.div
            variants={{
              hidden: {opacity: 0, y: 75},
              visible: {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1, delay: 3.5
            }}>
            <img className="md:w-mdw object-cover" src= {mainIMG} alt='Photo of Rachel in Stanley Park'/>
          </motion.div> 
        </group>
      </body>
    </section>
  );
}