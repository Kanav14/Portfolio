import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Terminal, 
  Cpu,
  Code2,
  Linkedin,
  Mail,
  Rocket,
  Trophy,
  Book
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

const DevopsLanding = ({ onAnimationComplete, isDarkTheme }) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const commands = [
    '$ whoami',
    '> Kanav Sharma',
    '$ role',
    '> DevOps Engineer',
    '$ ./portfolio.sh'
  ];

  const quickStats = [
    { 
      icon: <Trophy size={24} />, 
      title: "Years of Experience", 
      value: "5+",
      color: "text-yellow-400" 
    },
    { 
      icon: <Rocket size={24} />, 
      title: "Projects Delivered", 
      value: "50+",
      color: "text-blue-400" 
    },
    { 
      icon: <Code2 size={24} />, 
      title: "Infrastructure as Code", 
      value: "1000+",
      color: "text-green-400" 
    },
    { 
      icon: <Book size={24} />, 
      title: "Certifications", 
      value: "8+",
      color: "text-purple-400" 
    }
  ];

  const handleCommandComplete = () => {
    if (currentCommandIndex < commands.length - 1) {
      setCurrentCommandIndex(prev => prev + 1);
    } else {
      setShowContent(true);
      setTimeout(onAnimationComplete, 5000);
    }
  };

  return (
    <div className={`fixed inset-0 ${isDarkTheme ? 'bg-[#030306]' : 'bg-white'} transition-colors duration-500 ease-in-out`}>
      {/* Grid Pattern Background */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] ${isDarkTheme ? 'opacity-[0.2]' : 'opacity-[0.1]'}`}></div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-4xl">
          {/* Terminal Section */}
          <motion.div 
            className="bg-gray-900/95 rounded-xl p-4 font-mono text-sm mb-8 shadow-2xl border border-cyan-500/30 backdrop-blur-xl w-full max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-400 text-xs ml-2">portfolio.sh</span>
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

          {/* Main Content */}
          <AnimatePresence>
            {showContent && (
              <>
                {/* Personal Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-8"
                >
                  <motion.div
                    className="mb-8 inline-block"
                    animate={{
                      scale: [1, 1.1, 1],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <Cpu className="w-16 h-16 text-cyan-400 mx-auto" />
                  </motion.div>
                  <h1 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text mb-6`}>
                    Kanav Sharma
                  </h1>
                  <p className="text-xl md:text-2xl text-cyan-400 font-mono mb-6">
                    DevOps Engineer & Cloud Architect
                  </p>
                  <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                    Specializing in building scalable infrastructure, automating deployments, 
                    and optimizing cloud-native solutions with a focus on security and efficiency.
                  </p>
                  <div className="flex justify-center gap-6">
                    <motion.a 
                      href="https://github.com/yourusername" 
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      className={`${isDarkTheme ? 'text-white' : 'text-gray-800'} hover:text-cyan-400 transition-colors`}
                    >
                      <Github size={28} />
                    </motion.a>
                    <motion.a 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      className={`${isDarkTheme ? 'text-white' : 'text-gray-800'} hover:text-cyan-400 transition-colors`}
                    >
                      <Linkedin size={28} />
                    </motion.a>
                    <motion.a 
                      href="mailto:your.email@example.com"
                      whileHover={{ scale: 1.1 }}
                      className={`${isDarkTheme ? 'text-white' : 'text-gray-800'} hover:text-cyan-400 transition-colors`}
                    >
                      <Mail size={28} />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {quickStats.map((stat, i) => (
                    <motion.div
                      key={i}
                      className={`bg-gray-800/80 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: i * 0.1 }
                      }}
                    >
                      <motion.div
                        className={`mb-4 ${stat.color}`}
                        animate={{
                          scale: [1, 1.1, 1],
                          transition: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                        }}
                      >
                        {stat.icon}
                      </motion.div>
                      <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                      <p className="text-sm text-gray-400">{stat.title}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DevopsLanding;
