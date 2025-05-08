import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;