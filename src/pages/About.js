import React from 'react';
import AboutMe from './components/AboutMe';
import mochiIMG from '../images/mochi.jpg';
import lobIMG from '../images/lobster.jpg';
import bpIMG from '../images/boiling point.JPG';
import garibaldiIMG from '../images/garibaldi.JPG';
import hikeIMG from '../images/hike.JPG';
import lakeIMG from '../images/lake.JPG';
import shanghaiIMG from '../images/shanghai.JPG';
import thaiIMG from '../images/thailand.JPG';
import montIMG from '../images/montreal.JPG';
import weekIMG from '../images/weeknd.JPG';
import coldIMG from '../images/coldplay.jpg';
import szaIMG from '../images/sza.JPG';

export default function About() {
  return (
    <section id="about" className="about">
      <header >
        
      </header>
      <body>
        <h1 className="text-3xl p-10 pt-20 text-center">a bit about me!</h1>
        <ul className="">
          <li>
            <AboutMe 
              title={"FOODIE"} 
              blurb={"I love exploring new places to eat around Vancouver and taking food pics! If you need recommendations, I have a huge list saved on Google maps..."}
              pos={"right"}
              imgs={{one: mochiIMG, two: lobIMG, three: bpIMG}} 
            />
          </li>
          <li>
            <AboutMe 
              title={"HIKING"} 
              blurb={"I love hiking around BC, especially in the summer when the views are absolutely stunning. "}
              pos={"left"}
              imgs={{one: garibaldiIMG, two: hikeIMG, three: lakeIMG}} 
            />           
          </li>
          <li>
            <AboutMe 
              title={"TRAVELS"} 
              blurb={"Internationally, I’ve travelled to China (Shanghai, Beijing), Thailand (Bangkok, Hua Hin), and the US (Seattle, Portland). Within Canada, I’ve been to Montreal and Kelowna!"}
              pos={"right"}
              imgs={{one: shanghaiIMG, two: thaiIMG, three: montIMG}} 
            />          
          </li>
          <li>
            <AboutMe 
              title={"CONCERTS"} 
              blurb={"I’m a huge concert goer! The vibes are so different and I love the loud instrumentals. Some of the best ones have been The Weeknd, Shawn Mendes, Coldplay, SZA, and Jonas Brothers, Ed Sheeran."}
              pos={"left"}
              imgs={{one: weekIMG, two: coldIMG, three: szaIMG}} 
            />          
          </li>
        </ul>
      </body>
    </section>
  );
}