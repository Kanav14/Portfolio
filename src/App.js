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
      {/* Render sections */}
      {sections.map((section) => (
        <div
          key={section.id}
          className="section"
          onClick={() => handleClick(section)}
        >
          {section.isGif ? (
            <img
              src="https://media.giphy.com/media/3o7abK3Auv5leH6Av6/giphy.gif"
              alt="DevOps GIF"
            />
          ) : (
            <p>{section.text}</p>
          )}
        </div>
      ))}

      {/* Vertical and horizontal lines with glowing effect */}
      <div className="vertical-line glow-line"></div>
      <div className="vertical-line glow-line"></div>
      <div className="horizontal-line glow-line"></div>
      <div className="horizontal-line glow-line"></div>
    </div>
  );
}

export default App;
