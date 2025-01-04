import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { ModalContainer, StyledButton, SectionTitle } from './ModalContainer';

function Education({ closeModal, goToNext, goToPrevious }) {
  const educationDetails = [
    {
      degree: "Master of Science in Information Systems",
      institution: "DePaul University",
      location: "Chicago, IL",
      graduation: "Expected Graduation: June 2026",
      logo: "https://resources.depaul.edu/brand/PublishingImages/2021/ath-primary-registered.jpeg", // Add university logo
      highlights: [
        "Pursuing advanced studies in Information Systems",
        "Focusing on cutting-edge technologies and digital transformation",
        "Actively engaged in research and innovative technology projects",
      ],
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Chandigarh Group of Colleges",
      location: "India",
      graduation: "Graduated: June 2019",
      logo: "https://cgclerp.in/Images/DEFAULT_BG/default_logo1.png", // Add university logo
      highlights: [
        "Comprehensive education in Computer Science and Software Engineering",
        "Strong foundation in programming, algorithms, and software development",
        "Participated in multiple technical projects and innovations",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <ModalContainer className="p-4 md:p-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center mb-6"
      >
        <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mr-2" />
        <SectionTitle>Educational Journey</SectionTitle>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4 md:space-y-6"
      >
        {educationDetails.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-[#1e2436] p-4 md:p-6 rounded-xl border border-cyan-500/20 
              shadow-lg hover:shadow-cyan-400/20 transition-all duration-300
              hover:border-cyan-500/40"
          >
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="w-24 md:w-32 mb-4 md:mb-0 md:mr-6"
              >
                <img
                  src={edu.logo}
                  alt={`${edu.institution} Logo`}
                  className="w-full h-24 md:h-32 rounded-full object-cover 
                    border-4 border-cyan-400/20 hover:border-cyan-400/40 
                    transition-colors duration-300 bg-[#151922] p-2"
                />
              </motion.div>

              <div className="flex-1 space-y-3">
                <div className="text-center md:text-left">
                  <h2 className="text-xl md:text-2xl font-bold text-transparent 
                    bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {edu.degree}
                  </h2>
                  <div className="mt-2 space-y-1">
                    <p className="text-base md:text-lg font-semibold text-cyan-300">
                      {edu.institution} | {edu.location}
                    </p>
                    <p className="text-sm text-cyan-400">{edu.graduation}</p>
                  </div>
                </div>

                <motion.ul 
                  className="list-disc pl-5 mt-4 space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {edu.highlights.map((item, idx) => (
                    <li key={idx} className="text-sm md:text-base text-gray-300">
                      {item}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="flex justify-between mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <StyledButton onClick={goToPrevious}>Back</StyledButton>
        <StyledButton onClick={closeModal}>Main Menu</StyledButton>
        <StyledButton onClick={goToNext}>Next</StyledButton>
      </motion.div>
    </ModalContainer>
  );
}

export default Education;
