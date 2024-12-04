import React, { useState, useEffect } from "react";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  // Automatically hide the preloader after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  const sections = [
    { id: 1, text: "About Me" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Experience" },
    { id: 4, text: "Education" },
    { id: 5, text: "Kanav Sharma\nDevOps Engineer" }, // Text section
    { id: 6, text: "Certifications" },
    { id: 7, text: "Skills and Knowledge Base" },
    { id: 8, text: "Extra Curricular" },
    { id: 9, text: "Research and Patents" },
  ];

  const handleClick = (section) => {
    alert(`You clicked on ${section.text} section`);
  };

  return showPreloader ? (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center">
      <h1 className="text-white text-6xl font-bold mb-10 animate-fade-in">
        Hello World!!
      </h1>
      <img
        src="https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif"
        alt="Cloud with Rain"
        className="w-32 h-32 absolute top-10 right-10"
      />
    </div>
  ) : (
    <div className="relative w-full h-screen bg-gradient-to-t from-gray-900 to-black overflow-hidden">
      {/* Vertical and Horizontal Glowing Lines */}
      <div className="absolute w-1 h-full bg-gradient-to-b from-blue-500 via-green-400 to-purple-500 animate-gradient-vertical left-1/3"></div>
      <div className="absolute w-1 h-full bg-gradient-to-b from-blue-500 via-green-400 to-purple-500 animate-gradient-vertical left-2/3"></div>
      <div className="absolute h-1 w-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-gradient-horizontal top-1/3"></div>
      <div className="absolute h-1 w-full bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-gradient-horizontal top-2/3"></div>

      {/* Grid Sections */}
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full overflow-hidden">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex justify-center items-center text-white cursor-pointer hover:scale-100 hover:bg-white/10 transition-transform duration-300 overflow-hidden"
            onClick={() => handleClick(section)}
          >
            <p className="whitespace-pre-line text-center">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
