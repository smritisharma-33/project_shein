import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Delicious Meals</h1>
      </div>
      <p className="tagline">Your favorite meals throughout the day</p>
    </header>
  );
};

export default Header;