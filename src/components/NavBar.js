import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/breakfast" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Breakfast
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/lunch" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Lunch
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dinner" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Dinner
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;