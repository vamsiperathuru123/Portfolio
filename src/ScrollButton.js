import React from 'react';
import "./ScrollButton.css";

const ScrollButton = ({ scrollAmount }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <button className='scroll_button' onClick={scrollToTop}>More details</button>
  );
};

export default ScrollButton;
