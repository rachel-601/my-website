import React from 'react';
import Project from './components/Project';
import canvifyIMG from '../images/canvify.png';
import thriveIMG from '../images/thrive.png';
import trackIMG from '../images/track.png';

export default function Projects() {
  return (
    <div className="projects">
      <header >
        This is the projects page.
      </header>
      <body>
        <h1>my projects!</h1>
        <ul>
          <li>
            <Project 
              name={"ThriveThreads"}
              stack={"React.js, Cohere API, HTML, CSS"}
              descr={"Website where users speaking different languages can ask and answer health and wellness questions with easy translation."}
              img={thriveIMG}
            />
          </li>
          <li>
            <Project 
              name={"Canvify"}
              stack={"React.js, TypeScript, HTML, CSS"}
              descr={"Chrome extension that scrapes the data from the Canvas course management system and compiles important information together. "}
              img={canvifyIMG}
            />
          </li>
          <li>
            <Project 
              name={"TrackStar"}
              stack={"Java, Swing, JSON, JUnit"}
              descr={"A fitness tracker app that stores a user's running history and can calculate statistics relating to speed, duration, and length of the runs."}
              img={trackIMG}
            />
          </li>
        </ul>
      </body>
    </div>
  );
}