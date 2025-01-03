import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Brain, Medal, GitFork, Book } from 'lucide-react';
import { ModalContainer, StyledButton, SectionTitle } from './ModalContainer';

function ExtraCurricular({ closeModal, goToNext, goToPrevious }) {
  const activities = [
    {
      title: "Technical Engagement",
      icon: <GitFork className="w-5 h-5" />,
      color: "from-blue-400 to-blue-600",
      points: [
        "Regular participant in DevOps and Cloud Computing conferences",
        "Speaker at local tech meetups on AI and DevOps innovations",
        "Active contributor to open-source projects on GitHub",
      ],
    },
    {
      title: "Community Involvement",
      icon: <Users className="w-5 h-5" />,
      color: "from-green-400 to-green-600",
      points: [
        "Technical mentor for coding bootcamps and student workshops",
        "Volunteer at STEM education initiatives",
        "Participated in hackathons and innovation challenges",
      ],
    },
    {
      title: "Personal Development",
      icon: <Brain className="w-5 h-5" />,
      color: "from-purple-400 to-purple-600",
      points: [
        "Continuous learning in emerging technologies",
        "Building personal AI and DevOps projects",
        "Reading tech blogs and research papers",
      ],
    },
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
        <Medal className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
        <SectionTitle>Extra Curricular Activities</SectionTitle>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4 md:space-y-6"
      >
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#1e2436] p-4 md:p-6 rounded-xl border border-cyan-500/20 
              shadow-lg hover:shadow-cyan-400/20 transition-all duration-300
              hover:border-cyan-500/40 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${activity.color} 
                  text-white`}>
                  {activity.icon}
                </div>
                <h2 className="text-lg md:text-xl font-bold text-cyan-300">
                  {activity.title}
                </h2>
              </div>

              <motion.ul 
                className="space-y-3 pl-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {activity.points.map((point, idx) => (
                  <motion.li 
                    key={idx}
                    className="text-gray-300 text-sm md:text-base relative flex items-start gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <span className="absolute -left-4 top-2 w-2 h-2 rounded-full bg-cyan-400"></span>
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className={`absolute inset-0 bg-gradient-to-r ${activity.color} 
                transform rotate-12 translate-y-1/2`} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="flex justify-between mt-6 gap-4"
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

export default ExtraCurricular;
