import React from 'react';
import './App.css';
import Home from "./Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Experience from './Experience';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Experience" element={<Experience/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
