import React from "react";

function App() {
  const sections = [
    { id: 1, text: "About Me" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Experience" },
    { id: 4, text: "Education" },
    { id: 5, isHighlight: true }, // Highlighted section for "DevOps Engineer"
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
    <div className="relative w-full h-screen bg-black">
      {/* Vertical and Horizontal Glowing Lines */}
      <div className="absolute w-1 h-full bg-glow animate-line-flow left-1/3"></div>
      <div className="absolute w-1 h-full bg-glow animate-line-flow left-2/3"></div>
      <div className="absolute h-1 w-full bg-glow animate-line-flow top-1/3"></div>
      <div className="absolute h-1 w-full bg-glow animate-line-flow top-2/3"></div>

      {/* Grid Sections */}
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full overflow-hidden">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex justify-center items-center text-white cursor-pointer hover:scale-100 hover:bg-white/10 transition-transform duration-300 overflow-hidden"
            onClick={() => handleClick(section)}
          >
            {section.isHighlight ? (
              <p className="text-2xl font-extrabold text-blue-500 animate-pulse glow-text">
                DevOps Engineer
              </p>
            ) : (
              <p>{section.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
