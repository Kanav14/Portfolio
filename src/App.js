import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Github, Linkedin, Mail } from 'lucide-react';

const EnhancedPortfolio = () => {
  const [showHelloWorld, setShowHelloWorld] = useState(true);
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 1, text: "About Me", icon: "👨‍💻" },
    { id: 2, text: "Experience", icon: "💼" },
    { id: 3, text: "Education", icon: "🎓" },
    { id: 4, text: "Projects", icon: "🚀" },
    { id: 5, isHighlight: true },
    { id: 6, text: "Certifications", icon: "📜" },
    { id: 7, text: "Skills and Knowledge Base", icon: "🛠" },
    { id: 8, text: "Extra Curricular", icon: "🎯" },
    { id: 9, text: "Research and Patents", icon: "📚" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowHelloWorld(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <AnimatePresence mode="wait">
        {showHelloWorld ? (
          <motion.div
            key="hello"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen flex"
          >
            <div className="flex-1 bg-black flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  transition: { duration: 2, repeat: Infinity }
                }}
              >
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  Hello World!
                </h1>
              </motion.div>
            </div>
            <div className="flex-1 bg-gray-100 flex items-center justify-center relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  transition: { duration: 2, repeat: Infinity }
                }}
              >
                <img
                  src="/api/placeholder/400/400"
                  alt="Developer Animation"
                  className="w-64 h-64"
                />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto p-4"
          >
            <div className="grid grid-cols-3 gap-4 p-4">
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    p-6 rounded-xl cursor-pointer
                    ${section.isHighlight 
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-600' 
                      : 'bg-gray-800 hover:bg-gray-700'}
                    transition-all duration-300 ease-in-out
                  `}
                >
                  {section.isHighlight ? (
                    <div className="text-center">
                      <motion.h1 
                        className="text-4xl font-bold mb-2"
                        animate={{
                          backgroundPosition: ['0%', '100%'],
                          transition: { duration: 3, repeat: Infinity }
                        }}
                      >
                        Kanav Sharma
                      </motion.h1>
                      <p className="text-xl text-cyan-200">DevOps Engineer</p>
                      <div className="flex justify-center gap-4 mt-4">
                        <Github className="w-6 h-6 hover:text-cyan-300 cursor-pointer" />
                        <Linkedin className="w-6 h-6 hover:text-cyan-300 cursor-pointer" />
                        <Mail className="w-6 h-6 hover:text-cyan-300 cursor-pointer" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-3xl mb-2">{section.icon}</div>
                      <h2 className="text-lg font-semibold">{section.text}</h2>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedPortfolio;
