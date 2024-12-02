import React from 'react';
import './index.css';

function App() {
  return (
    <div className="grid-container">
      {/* Vertical dotted lines */}
      <div className="vertical-line"></div>
      <div className="vertical-line"></div>

      {/* Horizontal dotted lines */}
      <div className="horizontal-line"></div>
      <div className="horizontal-line"></div>

      {/* Grid items */}
      <div className="grid-item">Section 1</div>
      <div className="grid-item">Section 2</div>
      <div className="grid-item">Section 3</div>
      <div className="grid-item">Section 4</div>
      <div className="grid-item">Section 5</div>
      <div className="grid-item">Section 6</div>
      <div className="grid-item">Section 7</div>
      <div className="grid-item">Section 8</div>
      <div className="grid-item">Section 9</div>
    </div>
  );
}

export default App;
