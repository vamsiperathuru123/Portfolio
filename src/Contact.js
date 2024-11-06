import React from 'react';
import Navbar from './Navbar';
import "./Contact.css";
import "./About.css";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import SimpleFooter from './SimpleFooter';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
   faLinkedin,
   faFacebook,
   faXTwitter,
   faInstagram,
} from "@fortawesome/free-brands-svg-icons";


export default function Contact() {
  const [text]=useTypewriter({
    words:['Contact Details'],
    loop:true,
  });
  return (
    <div className='whole_contact'>
        <div><Navbar/></div>
        <div className='box'>
          <h2>
            {' '}
            <span style={{ color: "red", fontWeight: "bold", fontFamily: "Times New Roman"   }}>{text}</span>
            <span style={{ color: "red", fontFamily: "Times New Roman"   }}><Cursor/></span>
          </h2>
          <div className='contact'>
            <div>
              <div className='Address'>
                <h3>Address :</h3>
                <h4>H.N0 : 89/13, 1st Main Road, </h4>
                <h4>RamaKrishna Nagar,</h4>
                <h4>Ernavoor,</h4>
                <h4>Tiruvallur-dist,</h4>
                <h4>Chennai-600057,</h4>
                <h4>Tamil Nadu.</h4>
                <h4>Mobile No : 9840036307</h4>
                <h4>Mail : vamsiperathuru@gmail.com</h4>
              </div>
              <div className='socialmedia'>
                  <h3>Social Media Links :</h3>
                  <div className='Button__links_c'>
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
            <SimpleFooter/>
          </div>
        </div>

    
    </div>
  )
}
