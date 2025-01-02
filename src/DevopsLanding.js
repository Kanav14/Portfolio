import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Github, 
  Terminal, 
  Database, 
  Code2, 
  Container, 
  Cpu,
  Settings,
  Lock,
  Workflow,
  GitBranch
} from 'lucide-react';

const TypewriterText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      onComplete?.();
    }
  }, [currentIndex, text]);

  return (
    <span className="text-green-400 font-mono">
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
    '$ scanning infrastructure components...',
    '$ validating security protocols...',
    '$ configuring CI/CD pipelines...',
    '$ establishing cloud connections...',
    '$ system ready > Welcome to DevOps Command Center_'
  ];

  const techStack = [
    { icon: <Cloud size={28} />, name: 'Cloud Infrastructure', color: 'text-blue-400', description: 'AWS, Azure, GCP' },
    { icon: <Container size={28} />, name: 'Containerization', color: 'text-cyan-400', description: 'Docker, Podman' },
    { icon: <Cpu size={28} />, name: 'Orchestration', color: 'text-purple-400', description: 'Kubernetes, ECS' },
    { icon: <GitBranch size={28} />, name: 'Version Control', color: 'text-orange-400', description: 'Git, GitHub' },
    { icon: <Database size={28} />, name: 'Databases', color: 'text-green-400', description: 'SQL, NoSQL' },
    { icon: <Lock size={28} />, name: 'Security', color: 'text-red-400', description: 'DevSecOps' },
    { icon: <Workflow size={28} />, name: 'CI/CD', color: 'text-yellow-400', description: 'Jenkins, GitLab' },
    { icon: <Code2 size={28} />, name: 'IaC', color: 'text-pink-400', description: 'Terraform, Ansible' }
  ];

  const handleCommandComplete = () => {
    if (currentCommandIndex < commands.length - 1) {
      setCurrentCommandIndex(prev => prev + 1);
    } else {
      setShowInfrastructure(true);
      setTimeout(onAnimationComplete, 4000);
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 to-black flex flex-col justify-center items-center relative p-8">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.2]"></div>
      
      <div className="w-full max-w-5xl relative z-10">
        {/* Terminal Section */}
        <motion.div 
          className="bg-gray-900/95 rounded-xl p-6 font-mono text-sm mb-12 shadow-2xl border border-cyan-500/30 backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-400 text-xs ml-2">DevOps Terminal</span>
          </div>
          {commands.slice(0, currentCommandIndex + 1).map((command, index) => (
            <div key={index} className="mb-3">
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
                className="text-center mb-16"
              >
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text mb-6">
                  DevOps Infrastructure
                </h1>
                <p className="text-xl md:text-2xl text-cyan-400 font-mono">
                  Orchestrating Seamless Deployments
                </p>
              </motion.div>

              {/* Tech Stack Grid */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: i * 0.1 }
                    }}
                  >
                    <div className={`bg-gray-800/80 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20 ${tech.color}`}>
                      <motion.div
                        className="mb-4"
                        animate={{
                          scale: [1, 1.1, 1],
                          transition: { duration: 2, repeat: Infinity }
                        }}
                      >
                        {tech.icon}
                      </motion.div>
                      <h3 className="font-semibold mb-2 text-lg">{tech.name}</h3>
                      <p className="text-sm text-gray-400">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DevopsLanding;
