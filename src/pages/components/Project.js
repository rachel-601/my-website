import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion"

export default function Project({name, stack, descr, img, link}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView])

  return (
    <div className="py-10">
      <header >

      </header>
      <body className="lg:flex justify-center items-center">
        <div className='flex justify-center sm:justify-start'>
          <div className='h-img_reg w-img_reg overflow-hidden shadow-lg shadow-dark'>
            <a href={link} target='_blank'>
              <img src={img} alt='Image of project' className="w-img_reg h-img_reg object-cover"/>
            </a>
          </div>
        </div>
          <group ref={ref} className="w-1/2 text-center sm:text-left pl-6">
          <motion.div
            variants={{
              hidden: {opacity: 0, y: 75},
              visible: {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 1, delay: 0.25
            }}>
              <a href={link} target='_blank'>
                <h2 className="text-4xl transition ease-in-out delay-100 hover:text-hover">{name}</h2>
              </a>
              <h3 className="font-semibold py-2 text-xl">{stack}</h3>
              <p className="xl:text-lg">{descr}</p>
            </motion.div>
          </group>
      </body>
    </div>
  );
}