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
import Sahara from './images/Sahara.png';
import Movie from './images/Movie.png';
import waves from './images/waves.png';
import Lora from './images/Lora.png';
import AnimatedCardsHome from './AnimatedCardsHome';

export default function Home() {
  const [text] = useTypewriter({
    words: ['Perathuru Chandravamsi', 'a Frontend Developer'],
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
                      Front-end developer with a strong foundation in React JS, JavaScript, HTML, CSS, and Python. Recent Engineering Graduate with experience developing web applications, including e-commerce and movie search platforms. 
                      Seeking a position in a reputable organization where I can leverage my skills in front-end development to contribute to innovative projects and continue to grow my technical abilities.
                    </h4>
                    <a href="/Perathuru Chandravamsi - U1.pdf" download="Perathuru Chandravamsi - U1.pdf">
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
      <div>
        <h1 className='project'>
          Projects
        </h1>
        <AnimatedCardsHome/>
      </div>
      <div>
        <SimpleFooter/>
      </div>

      
    </div>
  );
}

