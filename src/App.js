import React, { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to switch from preloader to main content after 4 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 1, text: "About Me" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Experience" },
    { id: 4, text: "Education" },
    { id: 5, text: "Kanav Sharma", subtitle: "DevOps Engineer" }, // Section with name and title
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

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-screen bg-black">
        <h1 className="text-white text-6xl font-bold animate-fade-in">Hello World!</h1>
        <img
          src="https://media.giphy.com/media/3o7ablnjH9XoVrwWdo/giphy.gif"
          alt="Cloud with rain"
          className="absolute top-10 right-10 w-24 h-24 animate-bounce"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Vertical and Horizontal Glowing Lines */}
      <div className="absolute w-2 h-full bg-glow-vertical animate-glow-vertical left-1/3"></div>
      <div className="absolute w-2 h-full bg-glow-vertical animate-glow-vertical left-2/3"></div>
      <div className="absolute h-2 w-full bg-glow-horizontal animate-glow-horizontal top-1/3"></div>
      <div className="absolute h-2 w-full bg-glow-horizontal animate-glow-horizontal top-2/3"></div>

      {/* Grid Sections */}
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full overflow-hidden">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex justify-center items-center text-white cursor-pointer hover:scale-105 hover:bg-white/10 transition-transform duration-300 overflow-hidden"
            onClick={() => handleClick(section)}
          >
            {section.id === 5 ? (
              <div className="text-center">
                <h2 className="text-white text-4xl font-bold">{section.text}</h2>
                <p className="text-white text-lg">{section.subtitle}</p>
              </div>
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
