import React from 'react';
import './index.css';

function App() {
  const sectionContent = [
    'About Me',
    'Projects',
    'Experience',
    'Education',
    'Research and Patents',
    'Extra Curricular',
    'Certifications',
    'Skills and Knowledge Base'
  ];

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

      {/* Sections */}
      {sectionContent.map((text, index) => (
        <div
          key={index}
          className={`section section-${index + 1}`}
          onClick={() => handleClick(`Section ${index + 1}`)}
        >
          {index === 4 ? (
            <img
              src="https://media.giphy.com/media/3o7ablnjH9XoVrwWdo/giphy.gif" // Replace with the desired GIF URL
              alt="Middle section GIF"
              className="gif"
            />
          ) : (
            <p>{text}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
