import React from 'react';
import './index.css'; // Import the main CSS file

function App() {
  return (
    <div className="app-container">
      {/* Vertical lines */}
      <div className="line vertical-line-1"></div>
      <div className="line vertical-line-2"></div>

      {/* Horizontal lines */}
      <div className="line horizontal-line-1"></div>
      <div className="line horizontal-line-2"></div>
    </div>
  );
}

export default App;
