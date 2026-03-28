import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import './App.css';

function App() {
  const [themeConfig, setThemeConfig] = useState({
    brandName: 'LUXURY GOLD',
    brandLogo: '',
    primaryColor: '#D4AF37',
    secondaryColor: '#1a1a1a',
    textColor: '#000000',
    backgroundColor: '#ffffff',
    industry: 'Fashion',
    option: 'Web Branding', // 'Web Branding' or 'Web Ecommerce'
    showSections: {
      slider: true,
      banner: true,
      collection: true,
      policy: true,
      blog: false,
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
