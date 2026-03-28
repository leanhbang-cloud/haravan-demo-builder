import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import './App.css';

function App() {
  const [themeConfig, setThemeConfig] = useState({
    brandName: 'QUI PHUC',
    brandLogo: '',
    primaryColor: '#004a99',
    secondaryColor: '#e31837',
    textColor: '#333333',
    backgroundColor: '#ffffff',
    industry: 'Home',
    option: 'Web Ecommerce', // 'Web Branding' or 'Web Ecommerce'
    showSections: {
      slider: true,
      category: true,
      lookbook: true,
      collection: true,
      trust: true,
      news: true,
      footer: true
    }
  });

  const handleUpdate = (updates) => {
    setThemeConfig(prev => ({ ...prev, ...updates }));
  };

  const handleToggleSection = (section) => {
    setThemeConfig(prev => ({
      ...prev,
      showSections: {
        ...prev.showSections,
        [section]: !prev.showSections[section]
      }
    }));
  };

  return (
    <div className="app-container">
      <Sidebar 
        config={themeConfig} 
        onUpdate={handleUpdate} 
        onToggle={handleToggleSection} 
      />
      
      <div className="preview-container">
        <div className="preview-toolbar">
          <button className="active">Desktop</button>
          <button>Mobile</button>
          <button>Fullscreen</button>
        </div>
        
        <div className="preview-window">
          <Preview config={themeConfig} />
        </div>
      </div>
    </div>
  );
}

export default App;
