import React from 'react';
import './index.css';

function App() {
  const sections = [
    { id: 1, text: 'About Me' },
    { id: 2, text: 'Projects' },
    { id: 3, text: 'Experience' },
    { id: 4, text: 'Education' },
    { id: 5, text: 'Extra Curricular', isGif: true }, // Section 5 with GIF (not clickable)
    { id: 6, text: 'Certifications' },
    { id: 7, text: 'Skills and Knowledge Base' },
    { id: 8, text: 'Research and Patents' }, // Research and Patents in Section 8
  ];

  const handleClick = (section) => {
    if (section.id !== 5) { // Only make clickable if it's not section 5
      alert(`You clicked on ${section.text} section`);
    }
  };

  return (
    <div className="app-container">
      {/* Vertical lines */}
      <div className="line vertical-line-1"></div>
      <div className="line vertical-line-2"></div>

      {/* Horizontal lines */}
      <div className="line horizontal-line-1"></div>
      <div className="line horizontal-line-2"></div>

      {/* Sections */}
      {sections.map((section) => (
        <div
          key={section.id}
          className={`section section-${section.id}`}
          onClick={() => handleClick(section)}
        >
          {section.isGif ? (
            <img
              src="https://media.giphy.com/media/3o7ablnjH9XoVrwWdo/giphy.gif" // Replace with your desired GIF
              alt="GIF"
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
