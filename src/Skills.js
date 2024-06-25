import React, { useState } from 'react';
import "./Skills.css";
import Navbar from './Navbar';
import react from "./images/react.webp";
import html from "./images/html.png";
import javascript from "./images/javascript.webp";
import css from "./images/css.png";
import python from "./images/python.jpeg";
import SQL from "./images/SQL.png";
import DS from "./images/DS.jpg";
import SimpleFooter from './SimpleFooter';

export default function Skills() {
  return (
    <div className='whole_skills'>
        <div className='preload_img'>
          <img src={react} alt='react'/>
          <img src={javascript} alt='javascript'/>
          <img src={html} alt='html'/>
          <img src={css} alt='css'/>
          <img src={python} alt='python'/>
          <img src={SQL} alt='SQL'/>
          <img src={DS} alt='DS'/>
        </div>
        <div><Navbar/></div>
        <div className='box'>
           <div>
            <Tab/>
           </div>
           <div className='s_footer'>
             <SimpleFooter/>
           </div>
        </div>

    </div>
  )
}



const Tab = () =>{
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  return(
    <div>
      <ul className='skill_n'>
        <li className={`s_n ${isHovered ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className='s1_n'>
            <img src={react} alt='react'/>
            <h3>React Js</h3>
          </div>
        </li>
        <li className={`s_n ${isHovered1 ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
          <div className='s1_n'>
            <img src={javascript} alt='javascript'/>
            <h3>JavaScript</h3>
          </div>
        </li>
        <li className={`s_n ${isHovered2 ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
          <div className='s1_n'>
            <img src={html} alt='html'/>
            <h3>HTML</h3>
          </div>
        </li>
        <li className={`s_n ${isHovered3 ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
          <div className='s1_n'>
            <img src={css} alt='css'/>
            <h3>CSS</h3>
          </div>
        </li>
        <li className={`s_n ${isHovered4 ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)}>
          <div className='s1_n'>
            <img src={python} alt='python'/>
            <h3>Python</h3>
          </div>
        </li> 
        <li className={`s_n ${isHovered5 ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)}>
          <div className='s1_n'>
            <img src={SQL} alt='SQL'/>
            <h3>SQL</h3>
          </div>
        </li> 
        <li className={`s_n ${isHovered6 ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered6(true)} onMouseLeave={() => setIsHovered6(false)}>
          <div className='s1_n'>
            <img src={DS} alt='DS'/>
            <h3>DSA</h3>
          </div>
        </li> 
      </ul>
    </div>

  );
}
