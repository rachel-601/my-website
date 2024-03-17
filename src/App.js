import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './pages/components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './pages/components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body>
        <Router>
          <nav>
            <Navbar/>
          </nav>
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/about' exact element={<About/>} />
            <Route path='/projects' exact element={<Projects/>} />
            <Route path='/contact' exact element={<Contact/>} />
          </Routes>
        </Router>
        <Footer />
      </body>
    </div>
  );
}

export default App;
