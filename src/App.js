import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './pages/components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </body>
    </div>
  );
}

export default App;
