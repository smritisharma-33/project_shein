import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const getCurrentLabel = () => {
    if (location.pathname.includes('/breakfast')) return 'Breakfast';
    if (location.pathname.includes('/lunch')) return 'Lunch';
    if (location.pathname.includes('/dinner')) return 'Dinner';
    return 'Menu';
  };

  return (
    <nav className="navbar">
      {/* Mobile view */}
      <div className="mobile-header">
        <button className="hamburger-button" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="hamburger-icon">☰</span> {getCurrentLabel()}
        </button>
        {menuOpen && (
          <ul className="nav-menu mobile-nav">
            <li className="nav-item">
              <NavLink to="/breakfast" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Breakfast</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/lunch" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Lunch</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dinner" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Dinner</NavLink>
            </li>
          </ul>
        )}
      </div>

      {/* Desktop view */}
      <ul className="nav-menu desktop-nav">
        <li className="nav-item">
          <NavLink to="/breakfast" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Breakfast</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/lunch" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Lunch</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dinner" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Dinner</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
