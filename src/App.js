import React from "react";

function App() {
  const sections = [
    { id: 1, text: "About Me" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Experience" },
    { id: 4, text: "Education" },
    { id: 5, isImage: true }, // Section with custom image instead of GIF
    { id: 6, text: "Certifications" },
    { id: 7, text: "Skills and Knowledge Base" },
    { id: 8, text: "Extra Curricular" },
    { id: 9, text: "Research and Patents" },
  ];

  const handleClick = (section) => {
    if (section.id !== 5) {
      alert(`You clicked on ${section.text} section`);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Vertical and Horizontal Glowing Lines */}
      <div className="absolute w-0.5 h-full bg-glow animate-glow-animate left-1/3"></div>
      <div className="absolute w-0.5 h-full bg-glow animate-glow-animate left-2/3"></div>
      <div className="absolute h-0.5 w-full bg-glow animate-glow-animate top-1/3"></div>
      <div className="absolute h-0.5 w-full bg-glow animate-glow-animate top-2/3"></div>

      {/* Grid Sections */}
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex justify-center items-center text-white cursor-pointer hover:bg-white/10 transition-transform duration-300 transform hover:scale-105"
            onClick={() => handleClick(section)}
          >
            {section.isImage ? (
              <img
                src="/7030842.jpg" // Replace with your actual image path in the public folder
                alt="Custom Image"
                className="max-w-full max-h-full rounded-md border border-blue-600"
              />
            ) : (
              <p className="text-xl font-semibold">{section.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
