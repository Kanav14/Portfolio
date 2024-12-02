import React from 'react';
import './index.css';

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item">Section 1</div>
      <div className="grid-item">Section 2</div>
      <div className="grid-item">Section 3</div>
      <div className="grid-item">Section 4</div>
      <div className="grid-item">Section 5</div>
      <div className="grid-item">Section 6</div>
      <div className="grid-item">Section 7</div>
      <div className="grid-item">Section 8</div>
      <div className="grid-item">Section 9</div>
      {/* Vertical and horizontal lines */}
      <div className="dashed-vertical"></div>
      <div className="dashed-vertical"></div>
      <div className="dashed-horizontal"></div>
      <div className="dashed-horizontal"></div>
    </div>
  );
}

export default App;
