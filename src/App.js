import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Breakfast from './pages/Breakfast';
import Lunch from './pages/Lunch';
import Dinner from './pages/Dinner';
import './styles/App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate replace to="/breakfast" />} />
            <Route path="/breakfast" element={<Breakfast />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/dinner" element={<Dinner />} />
            <Route path="*" element={<Navigate replace to="/breakfast" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;