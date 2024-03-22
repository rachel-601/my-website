import React from 'react';
import mainIMG from "../images/main.jpg"

export default function Home() {
  return (
    <div className="home">
      <header >
        This is the home page.
      </header>
      <body>
        <h1>
          rachel shi
        </h1>
        <p>developer • vancouver foodie • runner • hiker • show binger • learner • snowboarder • gym goer • frisbee player • reader • cook • baker</p>
        <img src= {mainIMG} alt='Photo of Rachel in Stanley Park' width={200}/>
      </body>
    </div>
  );
}