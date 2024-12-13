import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Experience from "./Experience";

function App() {
  const [showHelloWorld, setShowHelloWorld] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Sections Data
  const sections = [
    { id: 1, text: "About Me" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Experience" },
    { id: 4, text: "Education" },
    { id: 5, isHighlight: true },
    { id: 6, text: "Certifications" },
    { id: 7, text: "Skills and Knowledge Base" },
    { id: 8, text: "Extra Curricular" },
    { id: 9, text: "Research and Patents" },
  ];

  // Hide "Hello World" after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHelloWorld(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Handle section click
  const handleClick = (section) => {
    if (!section.isHighlight) {
      setActiveSection(section);
      const index = sections.findIndex(s => s.text === section.text);
      setCurrentSectionIndex(index);
    }
  };

  // Close modal
  const closeModal = () => setActiveSection(null);

  // Navigate to next section
  const goToNext = () => {
    const nextIndex = (currentSectionIndex + 1) % sections.length;
    const nextSection = sections.find((_, index) => index === nextIndex);
    
    // Skip highlight section
    if (nextSection.isHighlight) {
      const afterHighlightIndex = (nextIndex + 1) % sections.length;
      setActiveSection(sections[afterHighlightIndex]);
      setCurrentSectionIndex(afterHighlightIndex);
    } else {
      setActiveSection(nextSection);
      setCurrentSectionIndex(nextIndex);
    }
  };

  // Navigate to previous section
  const goToPrevious = () => {
    const prevIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
    const prevSection = sections.find((_, index) => index === prevIndex);
    
    // Skip highlight section
    if (prevSection.isHighlight) {
      const beforeHighlightIndex = (prevIndex - 1 + sections.length) % sections.length;
      setActiveSection(sections[beforeHighlightIndex]);
      setCurrentSectionIndex(beforeHighlightIndex);
    } else {
      setActiveSection(prevSection);
      setCurrentSectionIndex(prevIndex);
    }
  };

  // Render the "Hello World" screen
  const renderHelloWorld = () => (
    <div className="flex h-full">
      <div className="flex-1 bg-black flex justify-center items-center">
        <motion.h1
          className="text-white text-8xl font-extrabold animate-hanging"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        >
          Hello World!
        </motion.h1>
      </div>
      <div className="flex-1 bg-[#efefef] flex justify-center items-center relative">
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1sbzZyM3FjbTF5ZXpmMXlscG9oMnQ3bWVycDBkZnY3amEwOHI1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WtTnAfZn6aVJfBzlN3/giphy.gif"
          alt="Cloud with rain"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-auto max-w-full"
          style={{ pointerEvents: "none" }}
        />
      </div>
    </div>
  );

  // Render sections grid
  const renderSectionsGrid = () => (
    <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`relative m-2 ${
            section.isHighlight
              ? "bg-black text-white shadow-highlight border border-cyan-400"
              : "bg-white text-black border border-gray-200 rounded-lg shadow-md"
          } flex justify-center items-center cursor-pointer hover:shadow-lg transition-transform duration-300`}
          onClick={() => handleClick(section)}
        >
          {section.isHighlight ? (
            <div className="text-center">
              <motion.h1
                className="text-5xl font-extrabold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Kanav Sharma
              </motion.h1>
              <motion.p
                className="text-2xl mt-2 font-medium text-cyan-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: 0.3,
                }}
              >
                DevOps Engineer
              </motion.p>
            </div>
          ) : (
            <p>{section.text}</p>
          )}
        </div>
      ))}
    </div>
  );

  // Render modal
  const renderModal = () =>
    activeSection && (
      <div
        className="modal-overlay flex justify-center items-center"
        onClick={closeModal}
      >
        <div
          className="modal-content bg-gray-800 p-6 rounded-lg shadow-lg relative max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          <button
            className="modal-close-btn absolute top-2 right-2 text-white font-bold text-lg"
            onClick={closeModal}
          >
            &times;
          </button>
          {activeSection.text === "About Me" ? (
            <AboutMe 
              closeModal={closeModal} 
              goToNext={goToNext} 
              goToPrevious={goToPrevious} 
            />
          ) : activeSection.text === "Projects" ? (
            <Project 
              closeModal={closeModal} 
              goToNext={goToNext} 
              goToPrevious={goToPrevious} 
            />
          ) : activeSection.text === "Experience" ? (
            <Experience 
              closeModal={closeModal} 
              goToNext={goToNext} 
              goToPrevious={goToPrevious} 
            />
          ) : (
            <h2 className="text-xl font-bold text-white">
              Content for {activeSection.text} coming soon!
            </h2>
          )}
        </div>
      </div>
    );

  return (
    <div className="relative w-full h-screen bg-overall-gradient">
      {showHelloWorld ? renderHelloWorld() : (
        <div className="relative w-full h-screen overflow-hidden">
          {renderSectionsGrid()}
          {renderModal()}
        </div>
      )}
    </div>
  );
}

export default App;
