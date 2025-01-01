import React from 'react';
import Navbar from './Navbar';
import "./Contact.css";
import "./About.css";
import "./Home.css";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import SimpleFooter from './SimpleFooter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_r04dyvt', 'template_l8rz1us', e.target, 'oU_A8_OHTnBT-h-I1')
      .then(
        (result) => {
          e.target.reset();
          alert("Successfully Sent");
          console.log(result.txt);
        },
        (error) => {
          alert("Error");
          console.log(error);
        }
      );
  };

  const [text] = useTypewriter({
    words: ['Contact Details'],
    loop: true,
  });

  return (
    <div className='whole_contact'>
      <Navbar />
      <div className='box'>
        <h2>
          <span style={{ color: "red", fontWeight: "bold", fontFamily: "Times New Roman" }}>{text}</span>
          <Cursor />
        </h2>
        <div className='contact'>
          <div className='details'>
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
                <a className="LinkedIn" href="https://www.linkedin.com/in/perathuru-chandravamsi-0b214021a">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a className="Instagram" href="https://www.instagram.com/chandravamsi.p">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a className="Facebook" href="https://www.facebook.com/perathuru.vamsi">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a className="X" href="https://twitter.com/ChandravamsiP">
                  <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </a>
              </div>
            </div>
          </div>
          <div className='form_container'>
            <div className='forms'>
              <form onSubmit={sendEmail}>
                <div className='form_com'>
                  <label>Name</label>
                  <input type='text' placeholder='Enter Name' required name='name' />
                </div>
                <div className='form_com'>
                  <label>Email</label>
                  <input type='email' placeholder='Enter Email' required name='Email' />
                </div>
                <div className='form_com'>
                  <label>Contact No</label>
                  <input type="tel" placeholder="Enter your mobile number" pattern="[0-9]{10}" maxLength="10" required name='contact' />
                </div>
                <div className='form_com'>
                  <label>Message</label>
                  <textarea placeholder='Write Your Message' name='message' required rows="4" cols="50" />
                </div>
                <div className='form_btn'>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <SimpleFooter />
      </div>
    </div>
  );
}
