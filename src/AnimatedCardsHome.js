import React, { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import './AnimatedCardsHome.css';
import Sahara from './images/Sahara.png';
import Movie from './images/Movie.png';
import waves from './images/waves.png';
import Lora from './images/Lora.png';


function AnimatedCardsHome() {
    const [hselectedCard, hsetSelectedCard] = useState('c1');
    const isSmallScreen = useMediaQuery({ maxWidth: 1036 });
    const topRef = useRef(null);

    const handleChange = (e) => {
        hsetSelectedCard(e.target.id);
        if (isSmallScreen) {
            topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const renderCard = (id, image, title, hdescription, link) => (
        <div className={`hcard-wrapper${hselectedCard === id ? ' selected' : ''}`} key={id}>
            <input type="radio" name="slide" id={id} checked={hselectedCard === id} onChange={handleChange} />
            <label htmlFor={id} className="hcard" style={{ backgroundImage: `url(${image})` }}>
                <div className="hrow">
                    <div className="hicon">{id.slice(1)}</div>
                    <div className="hdescription">
                        {link !== '#' ? (
                           <h4 className='htitle'><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h4>
                        ) : (
                            <div>
                                <h4>{title}</h4>
                            </div>
                        )}
                        {/* <p>{hdescription}</p> */}
                        {/* <ScrollButton scrollAmount={500} /> */}
                        <a className='hlink' href='/Projects' >More details</a> 

                    </div>
                </div>
            </label>
        </div>
    );

    return (
        <div className="whole_cards" ref={topRef}>
            {isSmallScreen ? (
                <div className="small_screen">
                    {/* Render the selected hcard */}
                    {renderCard(
                        hselectedCard,
                        hselectedCard === 'c1' ? Sahara : hselectedCard === 'c2' ?  Movie : hselectedCard === 'c3' ? Lora : waves,
                        hselectedCard === 'c1' ? 'SAHARA' : hselectedCard === 'c2' ? 'Movie Ratings Website' : hselectedCard === 'c3' ? 'Home Automation' : 'Simple Front-End Design',
                        hselectedCard === 'c1' ? 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify' : hselectedCard === 'c2' ? 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify' : hselectedCard === 'c3' ? 'Tools : LORA Ra-02, Arduino Uno, Node MCU, Arduino IDE, Blynk IOT' : 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify',
                        hselectedCard === 'c1' ? 'https://saharagadgets.netlify.app/' : hselectedCard === 'c2'? 'https://movieratingspro.netlify.app/' : hselectedCard === 'c4'? 'https://saharawaves.netlify.app/':'#'
                    )}
                    {/* <div className="black-tab">
                        <BlackTab hselectedCard={hselectedCard} />
                    </div> */}
                    {/* Render the unselected cards */}
                    <div className="unselected-cards">
                        {hselectedCard !== 'c1' && renderCard('c1', Sahara, 'SAHARA', 'Tools Used: React js, HTML, CSS, JavaScript, GitHub, Netlify', 'https://saharagadgets.netlify.app/')}
                        {hselectedCard !== 'c2' && renderCard('c2', Movie, 'Movie Ratings Website', 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify', 'https://movieratingspro.netlify.app/')}
                        {hselectedCard !== 'c3' && renderCard('c3', Lora, 'Home Automation', 'Tools : LORA Ra-02, Arduino Uno, Node MCU, Arduino IDE, Blynk IOT', '#')}
                        {hselectedCard !== 'c4' && renderCard('c4', waves, 'Simple Front-End Design', 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify', 'https://saharawaves.netlify.app/')}
                    </div>
                </div>
            ) : (
                <div className="hwrapper">
                    <div className="hcontainer">
                        {/* Render all cards side by side */}
                        {renderCard('c1', Sahara, 'SAHARA', 'Tools Used: React js, HTML, CSS, JavaScript, GitHub, Netlify', 'https://saharagadgets.netlify.app/')}
                        {renderCard('c2', Movie, 'Movie Ratings Website', 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify', 'https://movieratingspro.netlify.app/')}
                        {renderCard('c3', Lora, 'Home Automation', 'Tools : LORA Ra-02, Arduino Uno, Node MCU, Arduino IDE, Blynk IOT', '#')}
                        {renderCard('c4', waves, 'Simple Front-End Design', 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify', 'https://saharawaves.netlify.app/')}
                    </div>
                    {/* <div className="black-tab">
                        <BlackTab hselectedCard={hselectedCard} />
                    </div> */}
                </div>
            )}
        </div>
    );
}

// function BlackTab({ hselectedCard }) {
//     const renderContent = () => {
//         switch (hselectedCard) {
//             case 'c1':
//                 return (
//                     <div className="black-tab-content">
//                         <h3>Project : <a href="https://saharagadgets.netlify.app/" target="_blank" rel="noopener noreferrer">SAHARA</a></h3>
//                         <h3>Link : <a href="https://saharagadgets.netlify.app/" target="_blank" rel="noopener noreferrer">Click Here</a></h3>
//                         <h3>Tools : React JS, HTML, CSS, JavaScript, GitHub, Netlify</h3>
//                         <h3>About SAHARA :</h3>
//                         <h4>
//                             This is an Affiliate Marketing E-Commerce Website that consolidates products from Amazon and other shopping websites into one convenient platform, simplifying the user's shopping experience. It showcases the best and most selling products based on ratings in each section, aiding users in their product selection process. 
//                             The data is fetched from Amazon APIs and other websites API keys such as Shopify, Ajio, Myntra, Boat, etc. Developed using React JS, JavaScript, HTML, and CSS, the website has been launched using GitHub and Netlify.
//                         </h4>
//                     </div>
//                 );
//             case 'c2':
//                 return (
//                     <div className="black-tab-content">
//                         <h3>Project : <a href="https://movieratingspro.netlify.app/" target="_blank" rel="noopener noreferrer">Movie Ratings Website</a></h3>
//                         <h3>Link : <a href="https://movieratingspro.netlify.app/" target="_blank" rel="noopener noreferrer">Click Here</a></h3>
//                         <h3>Tools : React JS, HTML, CSS, JavaScript, GitHub, Netlify</h3>
//                         <h3>About Project:</h3>
//                         <h4>
//                             This is a Movie Ratings Website that displays movie ratings from various sources. The data is fetched using API keys. 
//                             Developed using React JS, JavaScript, HTML, and CSS, the website has been launched using GitHub and Netlify.
//                         </h4>
//                     </div>
//                 );
//             case 'c3':
//                 return (
//                     <div className="black-tab-content">
//                         <h3>Project : Home Automation using LORA</h3>
//                         <h3>Tools : LORA Ra-02, Arduino Uno, Node MCU ( Esp8266 ), Arduino IDE, Blynk IOT, Sensors -[ Ultrasonic sensor (HC-SR04), PIR sensor, Gas sensor (MQ2), Temperature sensor (DHT11), Flame Sensor]</h3>
//                         <h3>About Project :</h3>
//                         <h4>
//                         An IoT-based automation system was developed using a LoRa module to implement high-range applications and access the system through a simple Blynk-based mobile application. 
//                         The main aim of this project is to enhance safety, security, and comfort for the user.
//                         </h4>
//                     </div>
//                 );
//             case 'c4':
//                 return (
//                     <div className="black-tab-content">
//                         <h3>Project : <a href="https://saharawaves.netlify.app/" target="_blank" rel="noopener noreferrer">Simple Front-End Design for College Event</a></h3>
//                         <h3>Link : <a href="https://saharawaves.netlify.app/" target="_blank" rel="noopener noreferrer">Click Here</a></h3>
//                         <h3>Tools : React JS, HTML, CSS, JavaScript, GitHub, Netlify</h3>
//                         <h3>About Project:</h3>
//                         <h4>
//                             This is a Simple Front-End Design for a website of the college symposium called Waves. It contains all the details of workshops, technical, and non-technical events. 
//                             Developed using React JS, JavaScript, HTML, and CSS, the website has been launched using GitHub and Netlify.
//                         </h4>
//                     </div>
                    

//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="black-tab-wrapper">
//             {renderContent()}
//         </div>
//     );
// }

export default AnimatedCardsHome;
