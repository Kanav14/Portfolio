import React, { useState, useEffect } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { motion } from "framer-motion";
import AboutMe from './AboutMe'; // Import the AboutMe component

function App() {
  const [activeSection, setActiveSection] = useState("home"); // Default section

  // Listen to hash change and update active section
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Get hash value without '#'
      if (hash) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Set the initial section on load

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const sections = [
    { id: 1, text: "About Me", path: "about" },
    { id: 2, text: "Projects", path: "projects" },
    { id: 3, text: "Experience", path: "experience" },
    { id: 4, text: "Education", path: "education" },
    { id: 5, text: "Certifications", path: "certifications" },
    { id: 6, text: "Skills", path: "skills" },
    { id: 7, text: "Research", path: "research" },
  ];

  // Conditional rendering for different sections
  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutMe />;
      case "projects":
        return <div>Projects Content</div>;
      case "experience":
        return <div>Experience Content</div>;
      case "education":
        return <div>Education Content</div>;
      case "certifications":
        return <div>Certifications Content</div>;
      case "skills":
        return <div>Skills Content</div>;
      case "research":
        return <div>Research Content</div>;
      default:
        return <div>Welcome to My Portfolio</div>;
    }
  };

  return (
    <Router>
      <div className="relative w-full h-screen bg-overall-gradient">
        {/* Navigation Links */}
        <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={`#${section.path}`} // Link with hash to trigger section change
              onClick={() => setActiveSection(section.path)} // Update state for active section
              className="relative m-2 bg-white text-black border border-gray-200 rounded-lg shadow-md flex justify-center items-center cursor-pointer hover:shadow-lg transition-transform duration-300"
            >
              <p>{section.text}</p>
            </Link>
          ))}
        </div>

        {/* Render Section Content Based on Active Section */}
        <div className="content-section">
          {renderSection()}
        </div>
      </div>
    </Router>
  );
}

export default App;
