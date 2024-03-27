import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './pages/components/Navbar';
import './App.css';
import { BrowserRouter as BrowserRouter } from 'react-router-dom';
import Footer from './pages/components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body class="bg-gradient-to-b from-dark via-medium via-middle via-light via-middle to-medium">
        <BrowserRouter>
          <Navbar/>
          <Home />
          <About/>
          <Projects/>
          <Contact/>
          <Footer />
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
