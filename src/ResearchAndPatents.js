import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Microscope } from 'lucide-react';
import { ModalContainer, StyledButton, SectionTitle } from './ModalContainer';

function ResearchAndPatents({ closeModal, goToPrevious }) {
  const patents = [
    {
      title: "Cricket Monitoring System",
      patentNumber: "201911004796",
      icon: "🎯",
      highlights: [
        "Developed a microwave-based monitoring system with 99% accuracy",
        "Innovative approach to tracking and analyzing cricket performance",
        "Demonstrates advanced signal processing and machine learning techniques",
      ],
      status: "Granted",
      year: "2021"
    },
    {
      title: "AI-Driven Consumer Behavior Analysis",
      patentNumber: "201911031034",
      icon: "🧠",
      highlights: [
        "Artificial Intelligence system for analyzing consumer behavior",
        "85% efficiency in predicting loan lending outcomes",
        "Utilizes advanced machine learning algorithms for financial risk assessment",
      ],
      status: "Published",
      year: "2022"
    },
  ];

  const researchInterests = [
    {
      area: "AI-Driven Infrastructure Optimization",
      description: "Exploring machine learning approaches for optimizing cloud resource allocation and infrastructure management."
    },
    {
      area: "DevOps and Generative AI Integration",
      description: "Investigating the application of generative AI in automating DevOps workflows and improving deployment processes."
    },
    {
      area: "Cloud Resource Management",
      description: "Researching efficient strategies for managing and optimizing cloud resources across multiple platforms."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
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
        className="flex items-center justify-center mb-6 gap-2"
      >
        <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
        <SectionTitle>Research and Patents</SectionTitle>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl md:text-2xl font-bold text-cyan-400">Patents</h2>
          </div>
          <div className="space-y-4">
            {patents.map((patent, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-[#1e2436] p-4 md:p-6 rounded-xl border border-cyan-500/20 
                  shadow-lg hover:shadow-cyan-400/20 transition-all duration-300
                  hover:border-cyan-500/40 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{patent.icon}</span>
                    <h3 className="text-lg md:text-xl font-bold text-transparent 
                      bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      {patent.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-sm">
                    <span className="text-cyan-300">Patent #{patent.patentNumber}</span>
                    <span className="text-cyan-400">{patent.status} ({patent.year})</span>
                  </div>

                  <ul className="list-disc pl-5 space-y-2">
                    {patent.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm md:text-base text-gray-300">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 transform -rotate-12 translate-y-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Microscope className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl md:text-2xl font-bold text-cyan-400">Research Interests</h2>
          </div>
          <div className="space-y-4">
            {researchInterests.map((research, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-[#1e2436] p-4 md:p-6 rounded-xl border border-cyan-500/20 
                  shadow-lg hover:shadow-cyan-400/20 transition-all duration-300
                  hover:border-cyan-500/40"
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {research.area}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {research.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="flex justify-between mt-6 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <StyledButton onClick={goToPrevious}>Back</StyledButton>
        <StyledButton onClick={closeModal}>Main Menu</StyledButton>
        <StyledButton className="invisible">Next</StyledButton>
      </motion.div>
    </ModalContainer>
  );
}

export default ResearchAndPatents;
