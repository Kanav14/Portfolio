import React from 'react';
import './index.css';

function App() {
  const sections = [
    { id: 1, text: 'About Me' },
    { id: 2, text: 'Projects' },
    { id: 3, text: 'Experience' },
    { id: 4, text: 'Education' },
    { id: 5, isImage: true }, // Section 5 with image
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
      {/* Sections */}
      {sections.map((section) => (
        <div
          key={section.id}
          className={`section section-${section.id}`}
          onClick={() => handleClick(section)}
        >
          {section.isImage ? (
            <img
              src="/7030842.jpg" // Path to your image
              alt="DevOps"
              className="section-image"
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
