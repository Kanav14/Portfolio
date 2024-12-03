import React from 'react';
import './index.css';

function App() {
  const sections = [
    { id: 1, text: 'About Me' },
    { id: 2, text: 'Projects' },
    { id: 3, text: 'Experience' },
    { id: 4, text: 'Education' },
    { id: 5, isGif: true },
    { id: 6, text: 'Certifications' },
    { id: 7, text: 'Skills and Knowledge Base' },
    { id: 8, text: 'Extra Curricular' },
    { id: 9, text: 'Research and Patents' },
  ];

  const handleClick = (section) => {
    if (section.id !== 5) {
      alert(`You clicked on ${section.text} section`);
    }
  };

  return (
    <div className="app-container">
      {/* Vertical lines with animated glow */}
      <div className="line vertical-line-1 glow-line"></div>
      <div className="line vertical-line-2 glow-line"></div>

      {/* Horizontal lines with animated glow */}
      <div className="line horizontal-line-1 glow-line"></div>
      <div className="line horizontal-line-2 glow-line"></div>

      {/* Sections */}
      {sections.map((section) => (
        <div
          key={section.id}
          className={`section section-${section.id}`}
          onClick={() => handleClick(section)}
        >
          {section.isGif ? (
            <img
              src="https://media.giphy.com/media/3o7abK3Auv5leH6Av6/giphy.gif"
              alt="DevOps GIF"
              className="gif"
            />
          ) : (
            <p>{section.text}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
