import React, { useState } from 'react';
import './Header.css';
import logo from '../../Assets/logo.png';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="ProVital Logo" className="logo-img" />
        <h1 className="logo">ProVital</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuVisible ? '✕' : '☰'}
        </button>
      </div>
      <nav className={`nav ${menuVisible ? 'nav-visible' : ''}`}>
        <a href="#" className="nav-link">List your practice</a>
        <span className="nav-link-divider"> | </span>
        <a href="#" className="nav-link">For Employers</a>
        <span className="nav-link-divider"> | </span>
        <a href="#" className="nav-link">Courses</a>
        <span className="nav-link-divider"> | </span>
        <a href="#" className="nav-link">Books</a>
        <span className="nav-link-divider"> | </span>
        <a href="#" className="nav-link">Speakers</a>
        <span className="nav-link-divider"> | </span>
        <a href="#" className="nav-link">Doctors</a>
        <span className="nav-link-divider"> | </span>
        <div className="dropdown-container">
          <a href="#" className="nav-link" onClick={toggleDropdown}>Login/Signup ↓</a>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <span className="dropdown-title">Doctor</span>
                <a href="#" className="dropdown-link">Login</a>
                <a href="#" className="dropdown-link">Sign up</a>
              </div>
              <div className="dropdown-item">
                <span className="dropdown-title">Patient</span>
                <a href="#" className="dropdown-link">Login</a>
                <a href="#" className="dropdown-link">Sign up</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
