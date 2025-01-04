import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Github, Linkedin, Mail } from 'lucide-react';
import { ModalContainer, StyledButton, SectionTitle, scrollToTop } from './ModalContainer';

const AboutMe = ({ closeModal, goToNext, goToPrevious }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const handleNavigation = (direction) => {
    setTimeout(() => {
      scrollToTop();
      if (direction === 'next') {
        goToNext();
      } else {
        goToPrevious();
      }
    }, 200);
  };

  const stats = [
    { label: "DevOps Tools", value: "10+" },
    { label: "Cloud Platforms", value: "3+" },
    { label: "Certifications", value: "5+" },
  ];

  return (
    <ModalContainer className="p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col modal-content"
      >
        <motion.div 
          className="flex items-center justify-center text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3">
            <User className="w-8 h-8 text-cyan-400 flex-shrink-0" />
            <SectionTitle>About Me</SectionTitle>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-32 h-32 md:w-40 md:h-40 mb-4 md:mb-0 md:mr-6"
          >
            <img
              src="images/kanav.png"
              alt="Kanav Sharma"
              className="rounded-full w-full h-full object-cover border-4 border-cyan-400 
                shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 transition-all 
                duration-300 hover:scale-105"
            />
            <motion.div 
              className="absolute inset-0 rounded-full border-4 border-cyan-400/50"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.2, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>

          <div className="text-center md:text-left">
            <motion.h1 
              className="text-3xl font-bold mb-2"
              style={{
                background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Kanav Sharma
            </motion.h1>
            <p className="text-xl text-cyan-400 font-mono mb-4">DevOps Engineer</p>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { Icon: Github, href: "https://github.com/Kanav14" },
                { Icon: Linkedin, href: "www.linkedin.com/in/kanav-sharma-engineer" },
                { Icon: Mail, href: "kanavsharma30@gmail.com" }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-lg leading-relaxed text-gray-300"
        >
          I am a passionate DevOps Engineer with 5+ years of experience automating
          and managing cloud-native solutions using cutting-edge technologies
          like Kubernetes, Docker, and AWS. I specialize in scalable CI/CD
          pipelines, Azure and AWS DevOps, and innovative AI-driven projects.
        </motion.p>

        <motion.div 
          className="grid grid-cols-3 gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-[#1e2436] p-4 rounded-xl border border-cyan-500/20 
                text-center shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-cyan-400 to-blue-500">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <StyledButton onClick={() => handleNavigation('prev')}>Back</StyledButton>
          <StyledButton onClick={closeModal}>Main Menu</StyledButton>
          <StyledButton onClick={() => handleNavigation('next')}>Next</StyledButton>
        </motion.div>
      </motion.div>
    </ModalContainer>
  );
};

export default AboutMe;
