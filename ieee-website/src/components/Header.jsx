import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const isActive = (href) => {
    const path = location.pathname === '/' ? '' : location.pathname;
    if (path === '' && href === '') return true;
    return path === `/${href}` || path === href;
  };

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <div className="header-logo left-logo">
            <img
              src="/images/dce-logo.png"
              alt="Dronacharya College of Engineering Logo"
            />
          </div>

          <div className="header-center">
            <div className="header-institute">
              Dronacharya College of Engineering, Gurugram
            </div>

            <div className="header-title">DICON 2027</div>

            <div className="header-subtitle">
              1<sup>st</sup> Dronacharya International Conference on Intelligent
              Computing & Emerging Technologies
            </div>

            <div className="header-date">23 - 24 April, 2027 | Hybrid Mode</div>
          </div>

          <div className="header-logo right-logo">
            <img src="/images/dicon2027.png" alt="DICON 2027 Logo" />
          </div>
        </div>
      </header>

      <nav className="top-nav">
        {/* HAMBURGER (mobile only) */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('') ? 'active' : ''}>Home</Link></li>
          <li><Link to="/institute" className={isActive('institute') ? 'active' : ''}>About Institute</Link></li>
          <li><Link to="/conference" className={isActive('conference') ? 'active' : ''}>About Conference</Link></li>
          <li><Link to="/tracks" className={isActive('tracks') ? 'active' : ''}>Call for Papers</Link></li>

          <li className={`nav-item has-dropdown ${openDropdown === 'committee' ? 'open' : ''}`}>
            <button className="dropdown-btn" onClick={() => toggleDropdown('committee')}>
              Conference Committee <span className="dropdown-arrow">▾</span>
            </button>
            <ul className="dropdown-list">
              <li><Link to="/committee" className={isActive('committee') ? 'active' : ''}>Organising Committee</Link></li>
              <li><Link to="/advisory" className={isActive('advisory') ? 'active' : ''}>Advisory Committee</Link></li>
            </ul>
          </li>

          <li className={`nav-item has-dropdown ${openDropdown === 'speakers' ? 'open' : ''}`}>
            <button className="dropdown-btn" onClick={() => toggleDropdown('speakers')}>
              Speakers <span className="dropdown-arrow">▾</span>
            </button>
            <ul className="dropdown-list">
              <li><Link to="/plenary" className={isActive('plenary') ? 'active' : ''}>Plenary Speakers</Link></li>
              <li><Link to="/keynote" className={isActive('keynote') ? 'active' : ''}>Keynote Speakers</Link></li>
            </ul>
          </li>
          <li><Link to="/registration" className={isActive('registration') ? 'active' : ''} style={{ backgroundColor: '#dc3545', color: 'white', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none' }}>Registration</Link></li>
          <li><Link to="/contact" className={isActive('contact') ? 'active' : ''}>Contact Us</Link></li>
          <li><Link to="/plagiarism" className={isActive('plagiarism') ? 'active' : ''}>Plagiarism Policy</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
