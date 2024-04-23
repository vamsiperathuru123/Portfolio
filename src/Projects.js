import React from 'react';
import "./Projects.css";
import Navbar from './Navbar';
import AnimatedCards from './AnimatedCards';
import SimpleFooter from './SimpleFooter';

export default function Projects() {
  return (
    <div className='projects'> 
       <div><Navbar/></div> 
       <div className='box_p'>
         <div className='Anim_cards'>
          <AnimatedCards/>
         </div>
       </div>
       <div>
        <SimpleFooter/>
       </div>
      
    </div>
  )
}
