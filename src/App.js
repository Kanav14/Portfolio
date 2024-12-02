import React from 'react';
import './index.css';

function App() {
  return (
    <div>
      {/* Sections */}
      <div className="section">Section 1</div>
      <div className="section">Section 2</div>
      <div className="section">Section 3</div>
      <div className="section">Section 4</div>
      <div className="section">Section 5</div>
      <div className="section">Section 6</div>
      <div className="section">Section 7</div>
      <div className="section">Section 8</div>
      <div className="section">Section 9</div>

      {/* Vertical dotted lines */}
      <div className="line vertical-line" style={{ left: "33.33%" }}></div>
      <div className="line vertical-line" style={{ left: "66.66%" }}></div>

      {/* Horizontal dotted lines */}
      <div className="line horizontal-line" style={{ top: "33.33%" }}></div>
      <div className="line horizontal-line" style={{ top: "66.66%" }}></div>
    </div>
  );
}

export default App;
