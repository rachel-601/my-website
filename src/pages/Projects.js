import React from 'react';
import Project from './components/Project';
import canvifyIMG from '../images/canvify.png';
import thriveIMG from '../images/thrive.png';
import trackIMG from '../images/track.png';
import equalIMG from '../images/equal.png';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <header >
      
      </header>
      <div className="flex justify-center">
       <body className='w-4/5'> 
        <h1 className="text-4xl p-10 pt-20 text-center">my projects!</h1>
          <ul className="grid sm:grid-cols-2 gap-10 lg:gap-4">
            <li>
              <Project 
                name={"ThriveThreads"}
                stack={"React.js, Cohere API, HTML, CSS"}
                descr={"Website where users speaking different languages can ask and answer health and wellness questions with easy translation."}
                img={thriveIMG}
                link={"https://devpost.com/software/thrivethread"}
              />
            </li>
            <li>
              <Project 
                name={"Canvify"}
                stack={"React.js, TypeScript, HTML, CSS"}
                descr={"Chrome extension that scrapes the data from the Canvas course management system and compiles important information together. "}
                img={canvifyIMG}
                link={"https://devpost.com/software/canvify"}
              />
            </li>
            <li>
              <Project 
                name={"TrackStar"}
                stack={"Java, Swing, JSON, JUnit"}
                descr={"A fitness tracker app that stores a user's running history and can calculate statistics relating to speed, duration, and length of the runs."}
                img={trackIMG}
                link={"https://github.com/rachel-601/TrackStar"}
              />
            </li>
            <li>
              <Project 
                name={"EqualWrites"}
                stack={"React.js, Python, HTML, CSS"}
                descr={"Application that analyzes the user's writing and returns percentages to indicate detected biases to help improve accessibility."}
                img={equalIMG}
                link={"https://devpost.com/software/equal-writes"}
              />
            </li>
          </ul>
        </body>
      </div>
        
    </section>
  );
}