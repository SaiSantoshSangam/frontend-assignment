// src/App.js
import React, { useState } from 'react';
import { FaHeart, FaShare, FaEye, FaChevronLeft } from 'react-icons/fa';
import './App.css';
import Statue from "./images/statue.png"
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-content">
          <button className="back-button">
            <FaChevronLeft />
          </button>
          
          <div className="artifact-title">
            <h1>MAITREYA BUDDHA</h1>
            <h1>IN GESTURE OF</h1>
            <h1>FEARLESSNESS</h1>
            <h1>(ABHAYA MUDRA)</h1>
          </div>
          
          <div className="stats-container">
            <div className="stat-item">
              <button className="stat-button">
                <FaHeart />
              </button>
              <span className="stat-value">0</span>
            </div>
            <div className="stat-item">
              <button className="stat-button">
                <FaShare />
              </button>
              <span className="stat-value">120</span>
            </div>
            <div className="stat-item">
              <button className="stat-button">
                <FaEye />
              </button>
              <span className="stat-value">27</span>
            </div>
          </div>
          
          <div className="artifact-info">
            <p>Dynasty:  Ahichchhatra</p>
            <p>Period:  200 CE</p>
            <p>Material: Sandstone</p>
            <p>Location:  National Museum</p>
          </div>
          
          <div className="artifact-description">
            <h3>Description:</h3>
            <p>
              Maitreya, the future Buddha to be, resides in the
              Tushita heaven as a bodhisattva waiting to redeem
              humanity. In Buddhism, Maitreya is the eighth
              Buddha, a successor of the seven historical Buddhas
              (sapta-manushi Buddhas). The Digha Nikaya
              mentions, Maitreya Buddha will be born in Ketumati,
              in present-day Varanasi, Uttar Pradesh. As a
              bodhisattva, Maitreya wears a heavily adorned with
              earrings, wristlets, necklaces, and an amulet. The
            </p>
            <a href="#" className="read-more">→ READ MORE</a>
          </div>
          
          <div className="button-container">
            <button className="add-collection-btn">ADD TO COLLECTION</button>
            <button className="souvenir-btn">SOUVENIR</button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <button 
          className={`toggle-btn ${!sidebarOpen ? 'visible' : ''}`} 
          onClick={toggleSidebar}
        >
          <FaChevronLeft />
        </button>
        
        <div className="image-container">
          {/* Grey background is applied via CSS */}
          <img 
            src={Statue}
            alt="Maitreya Buddha in Gesture of Fearlessness" 
            className="statue-image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;