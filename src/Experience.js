import React, { useState } from 'react';
import "./Experience.css";
import Navbar from './Navbar';
import { Cursor, useTypewriter } from 'react-simple-typewriter';


export default function Experience() {
    const [text]=useTypewriter({
        words:['Work Experiences'],
        loop:true,
      });
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='exp'>
        <div>
            <Navbar/>
        </div>
        <div className='Ebox'>
          <h2>
            {' '}
            <span style={{ color: "red", fontWeight: "bold", fontFamily: "Times New Roman"   }}>{text}</span>
            <span style={{ color: "red", fontFamily: "Times New Roman"   }}><Cursor/></span>
          </h2>
          <div className={`Es_n_h ${isHovered ? 'highlight' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  <div className='Es1_n_h'>
                    <h2>Mu-Sigma Bussiness Solutions Pvt Ltd, Bangalore</h2>
                    <h3>Role : Intern</h3>
                    <h4>Worked on React Js based Web Applications Development.</h4>
                    <h4>Learned how Debugging and Testing will be Done.</h4>
                    <h4>Worked on how API’s, Web Sockets and Service Workers works.</h4>
                  </div>
          </div> 

        </div>


    </div>
  )
}
