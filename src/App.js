// src/App.jsx
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Pillars from './Components/Pillars/Pillars';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Pillars/>
      {/* Other components and content */}
    </div>
  );
}
export default App;
