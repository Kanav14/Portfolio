import React from 'react';
import './index.css';

function App() {
  return (
    <div>
      {/* Vertical dotted lines */}
      <div className="dotted-line vertical-line" style={{ left: "33.33%" }}></div>
      <div className="dotted-line vertical-line" style={{ left: "66.66%" }}></div>

      {/* Horizontal dotted lines */}
      <div className="dotted-line horizontal-line" style={{ top: "33.33%" }}></div>
      <div className="dotted-line horizontal-line" style={{ top: "66.66%" }}></div>
    </div>
  );
}

export default App;
