import React from 'react';
import './Navbar.css';
import Navlinks from './Navlinks';


export default function Navbar() {
  return (
    <div className='h'>
      <nav className='navbar'>
        <div className='nav'>
          <div className='portfolio'>
            <h1>Portfolio.</h1>
          </div>
          <div>
            <Navlinks/>
          </div>
        </div>
      </nav>
    </div>
  )
}