import React from 'react';
import Project from './components/Project';

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
              img={"project image"}
            />
          </li>
          <li>
            <Project 
              name={"Canvify"}
              stack={"React.js, TypeScript, HTML, CSS"}
              descr={"Chrome extension that scrapes the data from the Canvas course management system and compiles important information together. "}
              img={"project image"}
            />
          </li>
        </ul>
      </body>
    </div>
  );
}