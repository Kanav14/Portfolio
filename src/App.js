import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronLeft, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Cloud, 
  Server, 
  Database,
  Sun,
  Moon,
  Lock,
  Briefcase,
  GraduationCap,
  Rocket,
  Scroll,
  Wrench,
  Target,
  BookOpen,
  Code2,
  GitBranch,
  Quote,
  Trophy
} from 'lucide-react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import Switch from 'react-switch';
import DevopsLanding from './DevopsLanding';
import AboutMe from "./AboutMe";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import ResearchAndPatents from "./ResearchAndPatents";
import SkillsAndKnowledge from "./SkillsAndKnowledge";
import ExtraCurricular from "./ExtraCurricular";

function App() {
  const [showHelloWorld, setShowHelloWorld] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardIcons = {
    "About Me": { icon: <Lock />, bgColor: "from-pink-400/20 to-pink-600/20" },
    "Experience": { icon: <Trophy />, bgColor: "from-yellow-400/20 to-yellow-600/20" },
    "Projects": { icon: <Rocket />, bgColor: "from-blue-400/20 to-blue-600/20" },
    "Education": { icon: <GraduationCap />, bgColor: "from-green-400/20 to-green-600/20" },
    "Certifications": { icon: <Scroll />, bgColor: "from-purple-400/20 to-purple-600/20" },
    "Skills and Knowledge Base": { icon: <Code2 />, bgColor: "from-indigo-400/20 to-indigo-600/20" },
    "Extra Curricular": { icon: <Target />, bgColor: "from-orange-400/20 to-orange-600/20" },
    "Research and Patents": { icon: <BookOpen />, bgColor: "from-cyan-400/20 to-cyan-600/20" }
  };

  const devopsQuotes = [
    {
      text: "Infrastructure as code: Because clicking buttons is so 2010.",
      icon: <Cloud className="w-8 h-8 text-cyan-400" />
    },
    {
      text: "In DevOps, we don't fix problems. We prevent them from happening.",
      icon: <GitBranch className="w-8 h-8 text-green-400" />
    },
    {
      text: "Automate once, deploy anywhere.",
      icon: <Terminal className="w-8 h-8 text-purple-400" />
    },
    {
      text: "CI/CD: Making deployments as smooth as butter.",
      icon: <Server className="w-8 h-8 text-blue-400" />
    }
  ];

  const sections = [
    { id: 1, text: "About Me" },
    { id: 2, text: "Experience" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Education" },
    { id: 5, text: "Kanav Sharma", isHighlight: true, subtitle: "DevOps Engineer" },
    { id: 6, text: "Certifications" },
    { id: 7, text: "Skills and Knowledge Base" },
    { id: 8, text: "Extra Curricular" },
    { id: 9, text: "Research and Patents" }
  ];

  // ... [Previous useEffect and particle configurations remain the same]

  const handleClick = (section) => {
    if (!section.isHighlight) {
      setActiveSection(section);
      const index = sections.findIndex(s => s.text === section.text);
      setCurrentSectionIndex(index);
    }
  };

  const closeModal = () => setActiveSection(null);

  const goToNext = () => {
    const nextIndex = (currentSectionIndex + 1) % sections.length;
    const nextSection = sections[nextIndex];
    
    if (nextSection.isHighlight) {
      const afterHighlightIndex = (nextIndex + 1) % sections.length;
      setActiveSection(sections[afterHighlightIndex]);
      setCurrentSectionIndex(afterHighlightIndex);
    } else {
      setActiveSection(nextSection);
      setCurrentSectionIndex(nextIndex);
    }
  };

  const goToPrevious = () => {
    const prevIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
    const prevSection = sections[prevIndex];
    
    if (prevSection.isHighlight) {
      const beforeHighlightIndex = (prevIndex - 1 + sections.length) % sections.length;
      setActiveSection(sections[beforeHighlightIndex]);
      setCurrentSectionIndex(beforeHighlightIndex);
    } else {
      setActiveSection(prevSection);
      setCurrentSectionIndex(prevIndex);
    }
  };

  // ... [Grid and quotes rendering remain the same]

  const renderModal = () =>
    activeSection && (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        onClick={closeModal}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className={`
            ${isDarkTheme ? 'bg-[#1e2736]' : 'bg-white'} 
            ${isMobile ? 'p-4' : 'p-8'} 
            rounded-xl shadow-2xl relative max-h-[90vh] overflow-y-auto 
            w-full md:w-3/4 lg:max-w-5xl
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation buttons at the top */}
          <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Back
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={closeModal}
              className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Main Menu
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Next
            </motion.button>
          </div>

          <div className="mt-16"> {/* Add padding to account for the navigation buttons */}
            {activeSection.text === "About Me" ? (
              <AboutMe closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
            ) : activeSection.text === "Projects" ? (
              <Project closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
            ) : activeSection.text === "Experience" ? (
              <Experience closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
            ) : activeSection.text === "Education" ? (
              <Education closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
            ) : activeSection.text === "Certifications" ? (
              <Certifications closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
            ) : activeSection.text === "Skills and Knowledge Base" ? (
              <SkillsAndKnowledge closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
            ) : activeSection.text === "Extra Curricular" ? (
              <ExtraCurricular closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
            ) : activeSection.text === "Research and Patents" ? (
              <ResearchAndPatents closeModal={closeModal} goToNext={goToNext} goToPrevious={goToPrevious} />
            ) : (
              <h2 className={`text-xl md:text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>
                Content for {activeSection.text} coming soon!
              </h2>
            )}
          </div>
        </motion.div>
      </div>
    );

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-[#030306]' : 'bg-white'} transition-colors duration-500 ease-in-out`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out"
      />

      <div className="absolute top-2 right-2 md:top-4 md:right-4 z-50 transition-opacity duration-300">
        <Switch
          checked={isDarkTheme}
          onChange={setIsDarkTheme}
          onColor="#86d3ff"
          offColor="#1a1a1a"
          uncheckedIcon={
            <div className="flex items-center justify-center h-full">
              <Sun className="w-4 h-4 text-yellow-400" />
            </div>
          }
          checkedIcon={
            <div className="flex items-center justify-center h-full">
              <Moon className="w-4 h-4 text-white" />
            </div>
          }
          className="react-switch"
        />
      </div>

      <motion.div 
        className="relative z-10"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {showHelloWorld ? (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <DevopsLanding 
                onAnimationComplete={() => {
                  setShowHelloWorld(false);
                }} 
                isDarkTheme={isDarkTheme} 
                isMobile={isMobile}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-screen flex flex-col relative"
            >
              {renderGrid()}
              {renderQuotes()}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {renderModal()}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
