import React, { useRef } from 'react';
import './Cards.css';
import { MdArrowForwardIos, MdArrowBackIos, MdFavorite, MdFitnessCenter, MdHotel, MdMood, MdPeople, MdSmokeFree } from 'react-icons/md';

const Cards = () => {
  const cardData = [
    { 
      title: 'Nutrition', 
      description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.', 
      image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      overlayText: '121/80 mmHg',
      overlayIcon: <MdFavorite size="20px" style={{ color: 'red' }} />
    },
    { 
      title: 'Physical activity', 
      description: 'Regular physical activity is the key to managing weight, improving mental health, and reducing risk of chronic disease.', 
      image: 'https://images.pexels.com/photos/25599825/pexels-photo-25599825/free-photo-of-woman-laying-and-exercising-on-a-pilates-reformer-machine.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      overlayText: '32 minutes',
      overlayIcon: <MdFitnessCenter size="20px" style={{ color: 'blue' }} />
    },
    { 
      title: 'Restorative sleep', 
      description: 'Consistent, quality sleep is essential for cognitive function and physical health.', 
      image: 'https://images.pexels.com/photos/17219695/pexels-photo-17219695/free-photo-of-a-woman-sleeping-in-a-bed-with-a-quilt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      overlayText: '8 hours',
      overlayIcon: <MdHotel size="20px" style={{ color: 'purple' }} />
    },
    { 
      title: 'Stress management', 
      description: 'Effective stress management techniques are crucial for mental well-being and overall health.', 
      image: 'https://images.pexels.com/photos/3772612/pexels-photo-3772612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      overlayText: '60 bpm',
      overlayIcon: <MdMood size="20px" style={{ color: 'green' }} />
    },
    { 
      title: 'Social connection', 
      description: 'Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.', 
      image: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      overlayText: 'Feeling better',
      overlayIcon: <MdPeople size="20px" style={{ color: 'orange' }} />
    },
    { 
      title: 'Substance abuse', 
      description: 'Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.', 
      image: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/08/Sport-Drink-or-Water_-What-Should-You-Put-in-Your-Bottles_--752x472.jpg',
      overlayText: '62 days',
      overlayIcon: <MdSmokeFree size="20px" style={{ color: 'green' }} />
    },
  ];

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'left') {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="cards-slider">
      <button className="arrow left-arrow" onClick={() => scroll('left')} aria-label="Scroll left">
        <MdArrowBackIos size="30px" />
      </button>
      <div className="cards-container" ref={sliderRef}>
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="overlay-button">
              {card.overlayIcon} {card.overlayText}
            </div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow right-arrow" onClick={() => scroll('right')} aria-label="Scroll right">
        <MdArrowForwardIos size="30px" />
      </button>
    </div>
  );
};

export default Cards;
