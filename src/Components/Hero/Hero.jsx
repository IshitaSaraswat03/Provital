import React from 'react';
import './Hero.css';
import { FaSearch, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import Carousel from '../Carousel/Carousel';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="ellipse"></div>
      <div className="search-bar-box">
        <div className="search-bar">
          <div className="search-item">
            <FaSearch className="icon" />
            <input type="text" placeholder="Condition, procedure, specialty..." />
          </div>
          <div className="search-item">
            <FaMapMarkerAlt className="icon" />
            <input type="text" placeholder="City, state, or zipcode" />
          </div>
          <div className="search-item">
            <FaShieldAlt className="icon" />
            <input type="text" placeholder="Insurance carrier" />
          </div>
          <button><FaSearch className="icon" />  Find now</button>
        </div>
      </div>
      <Carousel/>
      <div className="hero-text">
        <p>
          Book an appointment with <span className="highlight">lifestyle medicine</span> experts
        </p>
        <div className="sub-text">
          Optimize your lifestyle and reverse chronic diseases.
        </div>
      </div>
      <div className="gradient-border"></div>
    </div>
  );
};

export default Hero;
