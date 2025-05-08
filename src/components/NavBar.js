import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/breakfast" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Breakfast
          </NavLink>
        </li>
        <li>
          <NavLink to="/lunch" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Lunch
          </NavLink>
        </li>
        <li>
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