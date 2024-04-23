import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
   faYoutube,
   faFacebook,
   faTwitter,
   faInstagram,
} from "@fortawesome/free-brands-svg-icons";


function Footer(){
    return(
        <div className="footerarea">
           <div className="scrolling__text_f">
                <Marquee speed='70' direction='right'>
                    <h3 className="scr1">"Have To add Some Text"</h3>
                    

                </Marquee>
           </div>
            <h2 className='lap'>
                   Contact Me
            </h2>
           <div className="footerarea__links">
                <a className="Youtube" href="https://www.youtube.com/channel/UCCiA82nGppn1S6WV_gFHcAw/featured">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a className="Facebook" href="https://www.facebook.com/profile.php?id=100077309365610">
                    <FontAwesomeIcon icon={faFacebook} size="2x"  />
                </a>
                <a className="Instagram" href="https://instagram.com/sahara_theoceanofgadgets?utm_medium=copy_link">
                    <FontAwesomeIcon icon={faInstagram} size="2x"  />
                </a>
               
                <a className="Twitter" href="https://twitter.com/SAHARA_Gadgets?t=LivN_7LiO8uzrLJ9gIRcDg&s=08">
                    <FontAwesomeIcon icon={faTwitter} size="2x"  />
                </a> 
               
              
           </div>
           
           <div className='footer_down'>
               <img className='Gmail_icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png'  alt="f" />
               <Link  className='footer_mail'>vamsiperathuru@gmail.com</Link><p className='footer_mail'>|9840036307| All rights are reserved | &copy;{new Date().getFullYear()},chandravamsi.com|</p>
           </div>
           
           
        </div>

    );
}
export default Footer;