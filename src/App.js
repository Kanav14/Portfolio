import React from 'react';
import './index.css';

function App() {
  const handleClick = (section) => {
    alert(`You clicked on ${section} section`);
  };

  return (
    <div className="app-container">
      {/* Vertical lines */}
      <div className="line vertical-line-1"></div>
      <div className="line vertical-line-2"></div>

      {/* Horizontal lines */}
      <div className="line horizontal-line-1"></div>
      <div className="line horizontal-line-2"></div>

      {/* Buttons for 9 sections */}
      <div className="section section-1" onClick={() => handleClick('Section 1')}></div>
      <div className="section section-2" onClick={() => handleClick('Section 2')}></div>
      <div className="section section-3" onClick={() => handleClick('Section 3')}></div>
      <div className="section section-4" onClick={() => handleClick('Section 4')}></div>
      <div className="section section-5" onClick={() => handleClick('Section 5')}></div>
      <div className="section section-6" onClick={() => handleClick('Section 6')}></div>
      <div className="section section-7" onClick={() => handleClick('Section 7')}></div>
      <div className="section section-8" onClick={() => handleClick('Section 8')}></div>
      <div className="section section-9" onClick={() => handleClick('Section 9')}></div>
    </div>
  );
}

export default App;
