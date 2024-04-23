import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navlinks() {
  const location = useLocation();
  const [menu, setMenu] = useState(getActiveMenu(location.pathname));
  const [isOpen,setIsOpen] = useState(false);

  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  };

  useEffect(() =>{
    const handleResize = () =>{
        if(window.innerWidth > 550){
          setIsOpen(false);
        }
    };
    window.addEventListener('resize',handleResize);
    return() =>{
       window.removeEventListener('resize',handleResize)
    };
  },[]);

  useEffect(() => {
    setMenu(getActiveMenu(location.pathname));
  }, [location.pathname]);

  function getActiveMenu(pathname) {
    if (pathname === '/') return 'Home';

    return pathname.substring(1);
  }

  return (
    <div>
          <div className='navlinks_outer'>
            <ul className={`nav_links ${isOpen ? 'active' : ''}`}>
              <li>
                <NavLink className='link' to="/" activeClassName="active">Home {menu === "Home" && <hr />}</NavLink>
              </li>
              <li>
                <NavLink className='link' to="/About" activeClassName="active">About {menu === "About" && <hr />}</NavLink>
              </li>
              <li>
                <NavLink className='link' to="/Skills" activeClassName="active">Skills {menu === "Skills" && <hr />}</NavLink>
              </li>
              <li>
                <NavLink className='link' to="/Projects" activeClassName="active">Projects {menu === "Projects" && <hr />}</NavLink>
              </li>
              <li>
                <NavLink className='link' to="/Experience" activeClassName="active">Experience {menu === "Experience" && <hr />}</NavLink>
              </li>
              <li>
                <NavLink className='link' to="/Contact" activeClassName="active">Contact {menu === "Contact" && <hr />}</NavLink>
              </li>
            </ul>
          </div>
          <button className={`navbar_toggle ${isOpen ? 'close' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
          </button>
          
    </div>
  );
}
