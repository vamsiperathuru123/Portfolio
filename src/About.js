import React, { useState } from 'react';
import './About.css';
import Navbar from './Navbar';
import react from "./images/react.webp";
import html from "./images/html.png";
import javascript from "./images/javascript.webp";
import css from "./images/css.png";
import python from "./images/python.jpeg";
import SQL from "./images/SQL.png";
import DS from "./images/DS.jpg";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import SimpleFooter from './SimpleFooter';



export default function About() {
  const [activeTab, setActiveTab] = useState('about');
  const [text]=useTypewriter({
    words:['Perathuru Chandravamsi'],
    loop:true,
  });
  

  return (
    <div className='whole_about'>
      <div className='preload_img'>
        <img src={react} alt='react'/>
        <img src={javascript} alt='javascript'/>
        <img src={html} alt='html'/>
        <img src={css} alt='css'/>
        <img src={python} alt='python'/>
        <img src={SQL} alt='SQL'/>
        <img src={DS} alt='DS'/>
      </div>
      <div>
        <Navbar />
      </div>
      <div className='box'>
        <h2>
          {' '}
          <span style={{ color: "red", fontWeight: "bold",fontFamily: "Times New Roman" }}>{text}</span>
          <span style={{ color: "red", fontFamily: "Times New Roman"  }}><Cursor/></span>
        </h2>
        <div className='about'>
          <nav className='A_nav'>
            <div className='A_navlinks'>
              <button
                className={`A_navlinks_b ${activeTab === 'about' && 'active'}`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
              <button
                className={`A_navlinks_b ${activeTab === 'skills' && 'active'}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
              <button
                className={`A_navlinks_b ${activeTab === 'education' && 'active'}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
            </div>
            <div>
              {activeTab === 'about' && <Tab1/>}
              {activeTab === 'skills' && <Tab2/>}
              {activeTab === 'education' && <Tab3/>}
            </div>
          </nav>
        </div>
        <div>
         <SimpleFooter/>
        </div>
      </div>

    </div>
  );
}


const Tab1 = () =>{
  return(
    <div className='tab1'>
      <h4>
        Hi! I'm Perathuru Chandravamsi, a Front-End Developer based in Chennai, Tamil Nadu. With a solid foundation in React JS, JavaScript, HTML, CSS, and Python, I bring a blend of technical expertise and innovative thinking to the table. 
        I recently graduated with a Bachelor's degree in Electrical and Electronics Engineering from the renowned College Of Engineering Guindy, Anna University, with a commendable CGPA of 8.34. My internship experience at Mu Sigma Business Analytics has equipped me with hands-on skills in React JS framework, API integration, and debugging. 
        I'm certified in Python Programming and Programming Data Structures Using Python from Kaggle and NPTEL, respectively. My project portfolio includes exciting ventures like an IoT-based Smart Home automation system, an Affiliate E-Commerce website, and a Movie Search website, showcasing my ability to deliver impactful solutions. Beyond coding, I've led workshops, organized events like WAVES, a national symposium, and volunteered for the National Sports Organization (NSO). 
        Fluent in Telugu, English, Hindi, and Tamil, I'm eager to bring my passion for technology and my knack for problem-solving to your team.
      </h4>
    </div>

  );
}
const Tab2 = () =>{
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  return(
    <div>
      <ul className='skill'>
        <li className={`s ${isHovered ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className='s1'>
            <img src={react} alt='react'/>
            <h3>React js</h3>
          </div>
        </li>
        <li className={`s ${isHovered1 ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
          <div className='s1'>
            <img src={javascript} alt='javascript'/>
            <h3>JavaScript</h3>
          </div>
        </li>
        <li className={`s ${isHovered2 ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
          <div className='s1'>
            <img src={html} alt='html'/>
            <h3>HTML</h3>
          </div>
        </li>
        <li className={`s ${isHovered3 ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
          <div className='s1'>
            <img src={css} alt='css'/>
            <h3>CSS</h3>
          </div>
        </li>
        <li className={`s ${isHovered4 ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)}>
          <div className='s1'>
            <img src={python} alt='python'/>
            <h3>Python</h3>
          </div>
        </li> 


        <li className={`s ${isHovered5 ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)}>
          <div className='s1'>
            <img src={SQL} alt='SQL'/>
            <h3>SQL</h3>
          </div>
        </li> 
        <li className={`s ${isHovered6 ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered6(true)} onMouseLeave={() => setIsHovered6(false)}>
          <div className='s1'>
            <img src={DS} alt='DS'/>
            <h3>DSA</h3>
          </div>
        </li> 

      </ul>
    </div>

  );
}
const Tab3 = () =>{
  return(
    <div className='tab3'>
      <div className='clg'>
        <div className='name_year'>
          <h3>College of Engineering Guindy, Anna University - Chennai, TN</h3>
          <h3>2019-2023</h3>
        </div>
        <h4>Degree     : Bachelor of Engineering</h4>
        <h4>Department : Electrical and Electronics Engineering</h4>
        <h4>CGPA       : 8.34</h4>
      </div>
      <div className='clg'>
        <div className='name_year'>
          <h3>Nayana Junior College - Nellore, AP</h3>
          <h3>2017-2019</h3>
        </div>
        <h4>Intermediate(12th)</h4>
        <h4>CGPA : 9.8</h4>
      </div>
      <div className='clg'>
        <div className='name_year'>
          <h3>ZPP High School - Chembedu, AP</h3>
          <h3>2016-2017</h3>
        </div>
        <h4>High School(10th)</h4>
        <h4>CGPA       : 9.0</h4>
      </div>
    </div>
    

  );
}
