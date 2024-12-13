import React, { useState } from "react";
import { motion } from "framer-motion";

import AboutMe from './AboutMe'; // Import the AboutMe component
// Import other section components if you have them

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showResearch, setShowResearch] = useState(false);

  const handleSectionClick = (section) => {
    switch (section) {
      case "about":
        setShowAbout(!showAbout);
        break;
      case "projects":
        setShowProjects(!showProjects);
        break;
      case "experience":
        setShowExperience(!showExperience);
        break;
      case "education":
        setShowEducation(!showEducation);
        break;
      case "certifications":
        setShowCertifications(!showCertifications);
        break;
      case "skills":
        setShowSkills(!showSkills);
        break;
      case "research":
        setShowResearch(!showResearch);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative w-full h-screen bg-overall-gradient">
      {/* Navigation Links */}
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
        <div
          onClick={() => handleSectionClick("about")}
          className="card bg-white text-black border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer"
        >
          <p>About Me</p>
        </div>
        <div
          onClick={() => handleSectionClick("projects")}
          className="card bg-white text-black border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer"
        >
          <p>Projects</p>
        </div>
        <div
          onClick={() => handleSectionClick("experience")}
          className="card bg-white text-black border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer"
        >
          <p>Experience</p>
        </div>
        <div
          onClick={() => handleSectionClick("education")}
          className="card bg-white text-black border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer"
        >
          <p>Education</p>
        </div>
        <div
          onClick={() => handleSectionClick("certifications")}
          className="card bg-white text-black border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer"
        >
          <p>Certifications</p>
        </div>
        <div
          onClick={() => handleSectionClick("skills")}
          className="card bg-white text-black border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer"
        >
          <p>Skills</p>
        </div>
        <div
          onClick={() => handleSectionClick("research")}
          className="card bg-white text-black border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer"
        >
          <p>Research</p>
        </div>
      </div>

      {/* Section Cards - Will Show/Hide based on State */}
      {showAbout && (
        <motion.div
          className="card-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AboutMe />
        </motion.div>
      )}

      {showProjects && (
        <motion.div
          className="card-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>Projects Content</div>
        </motion.div>
      )}

      {showExperience && (
        <motion.div
          className="card-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>Experience Content</div>
        </motion.div>
      )}

      {showEducation && (
        <motion.div
          className="card-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>Education Content</div>
        </motion.div>
      )}

      {showCertifications && (
        <motion.div
          className="card-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>Certifications Content</div>
        </motion.div>
      )}

      {showSkills && (
        <motion.div
          className="card-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>Skills Content</div>
        </motion.div>
      )}

      {showResearch && (
        <motion.div
          className="card-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>Research Content</div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
