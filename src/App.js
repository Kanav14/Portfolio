import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Cloud, Server, Database, Sun, Moon } from 'lucide-react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import * as Tooltip from '@radix-ui/react-tooltip';
import Switch from 'react-switch';
import AboutMe from "./AboutMe";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import ResearchAndPatents from "./ResearchAndPatents";
import SkillsAndKnowledge from "./SkillsAndKnowledge";
import ExtraCurricular from "./ExtraCurricular";

const EnhancedPortfolio = () => {
  const [showHelloWorld, setShowHelloWorld] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const devopsQuotes = [
    {
      text: "Infrastructure as code: Because clicking buttons is so 2010.",
      icon: <Cloud className="w-8 h-8 text-cyan-400" />
    },
    {
      text: "In DevOps, we don't fix problems. We prevent them from happening.",
      icon: <Server className="w-8 h-8 text-cyan-400" />
    },
    {
      text: "Automate once, deploy anywhere.",
      icon: <Terminal className="w-8 h-8 text-cyan-400" />
    },
    {
      text: "CI/CD: Making deployments as smooth as butter.",
      icon: <Database className="w-8 h-8 text-cyan-400" />
    }
  ];

  const sections = [
    { id: 1, text: "About Me", icon: "👨‍💻", tooltip: "Learn more about me" },
    { id: 2, text: "Experience", icon: "💼", tooltip: "My professional journey" },
    { id: 3, text: "Education", icon: "🎓", tooltip: "Academic background" },
    { id: 4, text: "Projects", icon: "🚀", tooltip: "View my projects" },
    { id: 5, text: "Kanav Sharma", isHighlight: true, subtitle: "DevOps Engineer" },
    { id: 6, text: "Certifications", icon: "📜", tooltip: "Professional certifications" },
    { id: 7, text: "Skills and Knowledge Base", icon: "🛠", tooltip: "Technical expertise" },
    { id: 8, text: "Extra Curricular", icon: "🎯", tooltip: "Beyond work activities" },
    { id: 9, text: "Research and Patents", icon: "📚", tooltip: "Research work" }
  ];

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: isDarkTheme ? "#ffffff" : "#000000" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: isDarkTheme ? "#ffffff" : "#000000",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      }
    },
    retina_detect: true
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowHelloWorld(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % devopsQuotes.length);
    }, 5000);
    return () => clearInterval(quoteTimer);
  }, []);

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
    const nextSection = sections.find((_, index) => index === nextIndex);
    
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
    const prevSection = sections.find((_, index) => index === prevIndex);
    
    if (prevSection.isHighlight) {
      const beforeHighlightIndex = (prevIndex - 1 + sections.length) % sections.length;
      setActiveSection(sections[beforeHighlightIndex]);
      setCurrentSectionIndex(beforeHighlightIndex);
    } else {
      setActiveSection(prevSection);
      setCurrentSectionIndex(prevIndex);
    }
  };

  const renderModal = () =>
    activeSection && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 ${isDarkTheme ? 'bg-black' : 'bg-white'} bg-opacity-50 flex justify-center items-center z-50`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className={`bg-${isDarkTheme ? 'gray-800' : 'white'} p-8 rounded-lg shadow-lg max-w-md w-full`}
        >
          {activeSection.text === "About Me" && <AboutMe />}
          {activeSection.text === "Projects" && <Project />}
          {activeSection.text === "Experience" && <Experience />}
          {activeSection.text === "Education" && <Education />}
          {activeSection.text === "Certifications" && <Certifications />}
          {activeSection.text === "Research and Patents" && <ResearchAndPatents />}
          {activeSection.text === "Skills and Knowledge Base" && <SkillsAndKnowledge />}
          {activeSection.text === "Extra Curricular" && <ExtraCurricular />}
          <button onClick={closeModal} className="mt-4 bg-red-600 text-white py-2 px-4 rounded">Close</button>
        </motion.div>
      </motion.div>
    );

  return (
    <div className={`${isDarkTheme ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen relative`}>
      {/* Hello World Section */}
      {showHelloWorld && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex justify-center items-center bg-gray-800 text-white"
        >
          <motion.h1
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="text-5xl font-bold"
          >
            Hello World!
          </motion.h1>
        </motion.div>
      )}

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />

      {/* Main Content */}
      <div className="pt-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
        </div>
        
        {/* DevOps Quotes Section */}
        <div className="mb-8 text-center">
          <motion.div
            key={currentQuoteIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <p className="text-lg italic mb-2">{devopsQuotes[currentQuoteIndex].text}</p>
            <div className="text-2xl">{devopsQuotes[currentQuoteIndex].icon}</div>
          </motion.div>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sections.map((section) => (
            <Tooltip.Root key={section.id}>
              <Tooltip.Trigger>
                <div
                  className="p-4 border rounded-lg cursor-pointer hover:shadow-lg"
                  onClick={() => handleClick(section)}
                >
                  <h3 className="text-xl">{section.icon} {section.text}</h3>
                </div>
              </Tooltip.Trigger>
              <Tooltip.Content>{section.tooltip}</Tooltip.Content>
            </Tooltip.Root>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>{renderModal()}</AnimatePresence>
      </div>
    </div>
  );
};

export default EnhancedPortfolio;
