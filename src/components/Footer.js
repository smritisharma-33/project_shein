import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Delicious Meals. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://smritisharma-33.github.io/#" target="_blank" rel="noopener noreferrer">
            About Me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;