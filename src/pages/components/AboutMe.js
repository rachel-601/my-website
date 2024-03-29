import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion"


export default function AboutMe({title, blurb, pos, imgs}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView])

  return (
    
    <div className="px-8 py-12">
      <header >
      
      </header>
      <body className={`${(pos === "left") ? "justify-center md:flex flex-row" : "md:flex flex-row-reverse justify-center"}`}>
        <group className='w-1/3 px-8' ref={ref}>
          <motion.div
            variants={{
              hidden: {opacity: 0, x: (pos === "right") ? 75 : -75},
              visible: {opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1, delay: 0.25
            }}>
            <div className={`sm:${(pos === "left") ? "text-right" : "text-left"} text-left`}>
              <h2 className="text-4xl tracking-wider">{title}</h2>
              <p className='text-xl'>{blurb}</p>
            </div>
          </motion.div>
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