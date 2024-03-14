import React from 'react';
import AboutMe from './components/AboutMe';

export default function About() {
  return (
    <div className="about">
      <header >
        This is the about page.
      </header>
      <body>
        <h1>a bit about me!</h1>
        <AboutMe 
          title={"FOODIE"} 
          blurb={"I love exploring new places to eat around Vancouver and taking food pics! If you need recommendations, I have a huge list saved on Google maps..."}
          pos={"right"}
          imgs={{one: "image 1", two: "image 2", three: "image 3"}} 
        />
        <AboutMe 
          title={"HIKING"} 
          blurb={"I love hiking around BC, especially in the summer when the views are absolutely stunning. "}
          pos={"left"}
          imgs={{one: "image 1", two: "image 2", three: "image 3"}} 
        />
        <AboutMe 
          title={"TRAVELS"} 
          blurb={"Internationally, I’ve travelled to China (Shanghai, Beijing), Thailand (Bangkok, Hua Hin), and the US (Seattle, Portland). Within Canada, I’ve been to Montreal and Kelowna!"}
          pos={"right"}
          imgs={{one: "image 1", two: "image 2", three: "image 3"}} 
        />
      </body>
    </div>
  );
}