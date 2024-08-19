import React, { useState } from 'react';
import './Pillars.css';
import Cards from '../Cards/Cards';

const Pillars = () => {
  const [activePillar, setActivePillar] = useState(0); // Default to Nutrition

  const handlePillarClick = (index) => {
    setActivePillar(index);
  };

  const pillars = [
    'Nutrition',
    'Physical activity',
    'Restorative sleep',
    'Stress management',
    'Social connection',
    'Substance abuse',
  ];

  return (
    <>
      <div className="pillars-container">
          <h2>HOW IT WORKS</h2>
          <p>
            <span className="gradient">Lifestyle as medicine:</span>{' '}
            <span className="whitespace">The six pillars</span>
          </p>
        <div className="pillars">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`pillar ${activePillar === index ? 'active' : ''}`}
              onClick={() => handlePillarClick(index)}
            >
              <span>{pillar}</span>
            </div>
          ))}
        </div>
      </div>
      <Cards />
    </>
  );
};

export default Pillars;
