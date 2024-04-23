import React, { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import './AnimatedCards.css';
import ScrollButton from './ScrollButton';
import Sahara from './images/Sahara.png';
import Movie from './images/Movie.png';
import waves from './images/waves.png';
import Lora from './images/Lora.png';

function AnimatedCards() {
    const [selectedCard, setSelectedCard] = useState('c1');
    const isSmallScreen = useMediaQuery({ maxWidth: 1036 });
    const topRef = useRef(null);

    const handleChange = (e) => {
        setSelectedCard(e.target.id);
        if (isSmallScreen) {
            topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const renderCard = (id, image, title, description, link) => (
        <div className={`card-wrapper${selectedCard === id ? ' selected' : ''}`} key={id}>
            <input type="radio" name="slide" id={id} checked={selectedCard === id} onChange={handleChange} />
            <label htmlFor={id} className="card" style={{ backgroundImage: `url(${image})` }}>
                <div className="row">
                    <div className="icon">{id.slice(1)}</div>
                    <div className="description">
                        {link !== '#' ? (
                           <h4><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h4>
                        ) : (
                            <div>
                                <h4>{title}</h4>
                            </div>
                        )}
                        <p>{description}</p>
                        <ScrollButton scrollAmount={500} />

                    </div>
                </div>
            </label>
        </div>
    );

    return (
        <div className="whole_cards" ref={topRef}>
            {isSmallScreen ? (
                <div className="small_screen">
                    {/* Render the selected card */}
                    {renderCard(
                        selectedCard,
                        selectedCard === 'c1' ? Sahara : selectedCard === 'c2' ?  Movie : selectedCard === 'c3' ? Lora : waves,
                        selectedCard === 'c1' ? 'SAHARA' : selectedCard === 'c2' ? 'Movie Ratings Website' : selectedCard === 'c3' ? 'Home Automation' : 'Simple Front-End Design',
                        selectedCard === 'c1' ? 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify' : selectedCard === 'c2' ? 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify' : selectedCard === 'c3' ? 'Tools : LORA Ra-02, Arduino Uno, Node MCU, Arduino IDE, Blynk IOT' : 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify',
                        selectedCard === 'c1' ? 'https://saharagadgets.netlify.app/' : selectedCard === 'c2'? 'https://movieratingspro.netlify.app/' : selectedCard === 'c4'? 'https://saharawaves.netlify.app/':'#'
                    )}
                    <div className="black-tab">
                        <BlackTab selectedCard={selectedCard} />
                    </div>
                    {/* Render the unselected cards */}
                    <div className="unselected-cards">
                        {selectedCard !== 'c1' && renderCard('c1', Sahara, 'SAHARA', 'Tools Used: React js, HTML, CSS, JavaScript, GitHub, Netlify', 'https://saharagadgets.netlify.app/')}
                        {selectedCard !== 'c2' && renderCard('c2', Movie, 'Movie Ratings Website', 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify', 'https://movieratingspro.netlify.app/')}
                        {selectedCard !== 'c3' && renderCard('c3', Lora, 'Home Automation', 'Tools : LORA Ra-02, Arduino Uno, Node MCU, Arduino IDE, Blynk IOT', '#')}
                        {selectedCard !== 'c4' && renderCard('c4', waves, 'Simple Front-End Design', 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify', 'https://saharawaves.netlify.app/')}
                    </div>
                </div>
            ) : (
                <div className="wrapper">
                    <div className="container">
                        {/* Render all cards side by side */}
                        {renderCard('c1', Sahara, 'SAHARA', 'Tools Used: React js, HTML, CSS, JavaScript, GitHub, Netlify', 'https://saharagadgets.netlify.app/')}
                        {renderCard('c2', Movie, 'Movie Ratings Website', 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify', 'https://movieratingspro.netlify.app/')}
                        {renderCard('c3', Lora, 'Home Automation', 'Tools : LORA Ra-02, Arduino Uno, Node MCU, Arduino IDE, Blynk IOT', '#')}
                        {renderCard('c4', waves, 'Simple Front-End Design', 'Tools : React js, HTML, CSS, JavaScript, GitHub, Netlify', 'https://saharawaves.netlify.app/')}
                    </div>
                    <div className="black-tab">
                        <BlackTab selectedCard={selectedCard} />
                    </div>
                </div>
            )}
        </div>
    );
}

function BlackTab({ selectedCard }) {
    const renderContent = () => {
        switch (selectedCard) {
            case 'c1':
                return (
                    <div className="black-tab-content">
                        <h3>Project : <a href="https://saharagadgets.netlify.app/" target="_blank" rel="noopener noreferrer">SAHARA</a></h3>
                        <h3>Link : <a href="https://saharagadgets.netlify.app/" target="_blank" rel="noopener noreferrer">Click Here</a></h3>
                        <h3>Tools : React JS, HTML, CSS, JavaScript, GitHub, Netlify</h3>
                        <h3>About SAHARA :</h3>
                        <h4>
                            This is an Affiliate Marketing E-Commerce Website that consolidates products from Amazon and other shopping websites into one convenient platform, simplifying the user's shopping experience. It showcases the best and most selling products based on ratings in each section, aiding users in their product selection process. 
                            The data is fetched from Amazon APIs and other websites API keys such as Shopify, Ajio, Myntra, Boat, etc. Developed using React JS, JavaScript, HTML, and CSS, the website has been launched using GitHub and Netlify.
                        </h4>
                    </div>
                );
            case 'c2':
                return (
                    <div className="black-tab-content">
                        <h3>Project : <a href="https://movieratingspro.netlify.app/" target="_blank" rel="noopener noreferrer">Movie Ratings Website</a></h3>
                        <h3>Link : <a href="https://movieratingspro.netlify.app/" target="_blank" rel="noopener noreferrer">Click Here</a></h3>
                        <h3>Tools : React JS, HTML, CSS, JavaScript, GitHub, Netlify</h3>
                        <h3>About Project:</h3>
                        <h4>
                            This is a Movie Ratings Website that displays movie ratings from various sources. The data is fetched using API keys. 
                            Developed using React JS, JavaScript, HTML, and CSS, the website has been launched using GitHub and Netlify.
                        </h4>
                    </div>
                );
            case 'c3':
                return (
                    <div className="black-tab-content">
                        <h3>Project : Home Automation using LORA</h3>
                        <h3>Tools : LORA Ra-02, Arduino Uno, Node MCU ( Esp8266 ), Arduino IDE, Blynk IOT, Sensors -[ Ultrasonic sensor (HC-SR04), PIR sensor, Gas sensor (MQ2), Temperature sensor (DHT11), Flame Sensor]</h3>
                        <h3>About Project :</h3>
                        <h4>
                        An IoT-based automation system was developed using a LoRa module to implement high-range applications and access the system through a simple Blynk-based mobile application. 
                        The main aim of this project is to enhance safety, security, and comfort for the user.
                        </h4>
                    </div>
                );
            case 'c4':
                return (
                    <div className="black-tab-content">
                        <h3>Project : <a href="https://saharawaves.netlify.app/" target="_blank" rel="noopener noreferrer">Simple Front-End Design for College Event</a></h3>
                        <h3>Link : <a href="https://saharawaves.netlify.app/" target="_blank" rel="noopener noreferrer">Click Here</a></h3>
                        <h3>Tools : React JS, HTML, CSS, JavaScript, GitHub, Netlify</h3>
                        <h3>About Project:</h3>
                        <h4>
                            This is a Simple Front-End Design for a website of the college symposium called Waves. It contains all the details of workshops, technical, and non-technical events. 
                            Developed using React JS, JavaScript, HTML, and CSS, the website has been launched using GitHub and Netlify.
                        </h4>
                    </div>
                    

                );
            default:
                return null;
        }
    };

    return (
        <div className="black-tab-wrapper">
            {renderContent()}
        </div>
    );
}

export default AnimatedCards;
