// DevopsLanding.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Git, 
  Terminal, 
  Database, 
  Code2, 
  Container, 
  Cpu,
  Settings,
  Lock
} from 'lucide-react';

const TypewriterText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
    }
  }, [currentIndex, text]);

  return (
    <span className="text-green-400">
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        _
      </motion.span>
    </span>
  );
};

const DevopsLanding = ({ onAnimationComplete }) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [showInfrastructure, setShowInfrastructure] = useState(false);

  const commands = [
    '$ initializing system...',
    '$ checking infrastructure status...',
    '$ validating security protocols...',
    '$ preparing deployment pipeline...',
    '$ system ready > Welcome to DevOps Dashboard'
  ];

  const techStack = [
    { icon: <Cloud size={24} />, name: 'Cloud', color: 'text-blue-400' },
    { icon: <Container size={24} />, name: 'Docker', color: 'text-cyan-400' },
    { icon: <Cpu size={24} />, name: 'Kubernetes', color: 'text-purple-400' },
    { icon: <Git size={24} />, name: 'CI/CD', color: 'text-orange-400' },
    { icon: <Database size={24} />, name: 'Database', color: 'text-green-400' },
    { icon: <Lock size={24} />, name: 'Security', color: 'text-red-400' },
    { icon: <Code2 size={24} />, name: 'Infrastructure as Code', color: 'text-yellow-400' },
    { icon: <Settings size={24} />, name: 'Automation', color: 'text-indigo-400' }
  ];

  const handleCommandComplete = () => {
    if (currentCommandIndex < commands.length - 1) {
      setCurrentCommandIndex(prev => prev + 1);
    } else {
      setShowInfrastructure(true);
      setTimeout(onAnimationComplete, 1000);
    }
  };

  return (
    <div className="flex-1 bg-transparent flex justify-center items-center relative p-8">
      <div className="w-full max-w-4xl">
        {/* Terminal Section */}
        <motion.div 
          className="bg-gray-900/90 rounded-lg p-6 font-mono text-sm mb-8 shadow-xl border border-cyan-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {commands.slice(0, currentCommandIndex + 1).map((command, index) => (
            <div key={index} className="mb-2">
              {index === currentCommandIndex ? (
                <TypewriterText 
                  text={command} 
                  onComplete={handleCommandComplete}
                />
              ) : (
                <span className="text-green-400">{command}</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Infrastructure Visualization */}
        <AnimatePresence>
          {showInfrastructure && (
            <>
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text mb-4">
                  DevOps Infrastructure
                </h1>
                <p className="text-xl text-cyan-400 font-mono">
                  Orchestrating Seamless Deployments
                </p>
              </motion.div>

              {/* Tech Stack Orbit */}
              <motion.div 
                className="relative h-64 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center ${tech.color}`}
                    animate={{
                      rotate: [0, 360],
                      transition: {
                        duration: 20,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "linear"
                      }
                    }}
                    style={{
                      transformOrigin: "50% 50%",
                      transform: `rotate(${i * (360 / techStack.length)}deg) translateY(-100px)`
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }
                      }}
                      className="bg-gray-900/80 p-3 rounded-full shadow-lg"
                    >
                      {tech.icon}
                    </motion.div>
                    <span className="text-xs mt-2 whitespace-nowrap bg-gray-900/80 px-2 py-1 rounded">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}

                {/* Central Hub */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  <Server className="w-12 h-12 text-cyan-400" />
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DevopsLanding;
