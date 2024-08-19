import React from 'react';
import './Carousel.css';
import image1 from '../../Assets/Image 1.png'; 
import image2 from '../../Assets/Image 2.png'; 
import image3 from '../../Assets/Image 3.png'; 
import image4 from '../../Assets/Image 4.png'; 
import image5 from '../../Assets/Image 5.png'; 
import image6 from '../../Assets/Image 6.png'; 
import image7 from '../../Assets/Image 7.png';
import image8 from '../../Assets/Image 8.png';

const Carousel = () => {
  return (
    <div className="carousel-space">
      <div className="carousel-container">
        <div className="carousel-column column1">
          <div className="carousel-item"><img src={image1} alt="Image 1" /></div>
          <div className="carousel-item"><img src={image2} alt="Image 2" /></div>
          <div className="carousel-item"><img src={image3} alt="Image 3" /></div>
          <div className="carousel-item"><img src={image4} alt="Image 4" /></div>
        </div>
        <div className="carousel-column column2">
          <div className="carousel-item"><img src={image5} alt="Image 5" /></div>
          <div className="carousel-item"><img src={image6} alt="Image 6" /></div>
          <div className="carousel-item"><img src={image7} alt="Image 7" /></div>
          <div className="carousel-item"><img src={image8} alt="Image 8" /></div> 
        </div>
      </div>
    </div>
  );
};

export default Carousel;
