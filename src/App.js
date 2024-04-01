import React from 'react';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './pages/components/Navbar';
import { BrowserRouter as BrowserRouter } from 'react-router-dom';
import Footer from './pages/components/Footer';

function App() {
  return (
    <div className="">
      <header className="">

      </header>
      <body className="p-0 m-0 bg-gradient-to-b from-dark via-medium via-middle via-light via-middle to-medium overflow-x-hidden">
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
