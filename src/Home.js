import React, { useState } from 'react';
import "./Home.css";
import Navbar from './Navbar';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SimpleFooter from './SimpleFooter';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
   faLinkedin,
   faFacebook,
   faXTwitter,
   faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import react from "./images/react.webp";
import html from "./images/html.png";
import javascript from "./images/javascript.webp";
import css from "./images/css.png";
import python from "./images/python.jpeg";
import SQL from "./images/SQL.png";
import DS from "./images/DS.jpg";
// import flutter from "./images/flutter.png";
import Sahara from './images/Sahara.png';
import Movie from './images/Movie.png';
import waves from './images/waves.png';
import Lora from './images/Lora.png';
import AnimatedCardsHome from './AnimatedCardsHome';

export default function Home() {
  const [text] = useTypewriter({
    words: ['Perathuru Chandravamsi'],
    loop: true,
    
  });
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className='home'>
      <div className='preload_img'>
        <img src={react} alt='react'/>
        <img src={javascript} alt='javascript'/>
        <img src={html} alt='html'/>
        <img src={css} alt='css'/>
        <img src={python} alt='python'/>
        <img src={SQL} alt='SQL'/>
        <img src={DS} alt='DS'/>
        {/* <img src={flutter} alt='flutter'/> */}
        <img src={Sahara} alt='Sahara'/>
        <img src={Movie} alt='Movie'/>
        <img src={waves} alt='waves'/>
        <img src={Lora} alt='Lora'/>
        
      </div>
      <div>
        <Navbar />
      </div>
      <div className='textbox1'>
        <div className='text_home'>
              <h1>
                Hello, I am{' '}
                <span style={{ color: "red", fontWeight: "bold", fontFamily:"Times New Roman"}}>{text}</span>
                <span style={{ color: "red", fontFamily: "Times New Roman"  }}><Cursor /></span>
              </h1>
        </div>
        <div className={`s_n_h ${isHovered ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  <div className='s1_n_h'>
                    <h3>Objective</h3>
                    <h4>
                    Recent Engineering Graduate with a strong foundation in React JS, JavaScript, HTML, CSS, Python, Power BI and SQL, coupled
                    with practical experience in web development and project work. Proven ability to develop and maintain web
                    applications and platforms, with a focus on innovation and quality. Adept at utilizing APIs and web frameworks to
                    create dynamic, user-friendly interfaces. Passionate about leveraging technical skills in a collaborative team
                    environment to contribute to impactful projects and continue professional growth.
                    </h4>
                    <a href="/Perathuru Chandravamsi - U2.pdf" download="Perathuru Chandravamsi - U2.pdf">
                       <button>Download Resume</button>
                    </a>
                    <div className="Button__links">
                            <a className="LinkedIn" href="https://www.linkedin.com/in/perathuru-chandravamsi-0b214021a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a className="Instagram" href="https://www.instagram.com/chandravamsi.p?igsh=NTJlenlrcTc3ZDhh">
                                <FontAwesomeIcon icon={faInstagram} size="2x"  />
                            </a>
                            <a className="Facebook" href="https://www.facebook.com/perathuru.vamsi?mibextid=ZbWKwL">
                                <FontAwesomeIcon icon={faFacebook} size="2x"  />
                            </a>
                            <a className="X" href="https://x.com/ChandravamsiP?s=09">
                                <FontAwesomeIcon icon={faXTwitter} size="2x"  />
                            </a>     
                    </div>
                  </div>
        </div> 
            
      </div>
      <div className='project'>
        <h1 className='project_h'>
          Projects
        </h1>
        <h4>
          Below are some of the key projects I have worked on, showcasing my skills in front-end development, API integration, and IoT solutions.
          Each project highlights my ability to develop practical applications using technologies like React JS, JavaScript, HTML & CSS.
        </h4>
        <div>
          <AnimatedCardsHome/>
        </div>
        
      </div>
      <div>
        <SimpleFooter/>
      </div>

      
    </div>
  );
}

