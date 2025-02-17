import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from 'lucide-react';
import { ModalContainer, StyledButton, SectionTitle, scrollToTop } from './ModalContainer';

function Experience({ closeModal, goToNext, goToPrevious }) {
  // Scroll to top when component mounts
  useEffect(() => {
    scrollToTop();
  }, []);

  const handleNavigation = (direction) => {
    // First fade out
    setTimeout(() => {
      scrollToTop();
      if (direction === 'next') {
        goToNext();
      } else {
        goToPrevious();
      }
    }, 200);
  };

  const experiences = [
    {
      company: "Amdocs",
      logo: "https://storage.googleapis.com/clean-finder-353810/$fMT2c6Qs4nCyWdgDFuHrFEOvj5nvCmYlZ0HFAdfdq4JxOYnmcrQPKb",
      roles: [
        {
          title: "DevOps Engineer (Advanced)",
          period: "January 2023 - August 2024",
          details: [
            "Led Digital R&D Team to automate artifact management in Nexus, reducing manual effort by 40%",
            "Implemented a vault automation tool, transferring 500+ secrets monthly and eliminating manual intervention",
            "Optimize cloud resources and implement infrastructure as code with Terraform",
          ],
        },
        {
          title: "DevOps Engineer (Experienced)",
          period: "August 2021 - December 2023",
          details: [
            "Developed automation scripts using Shell, Groovy, and Python, achieving a 30% faster release cycle",
            "Managed helm deployments with CI/CD pipeline, making deployment faster by 30%",
            "Automated infrastructure provisioning and configuration management",
          ],
        },
      ],
    },
    {
      company: "Nihilent Ltd",
      logo: "https://www.nihilent.com/wp-content/uploads/2022/02/logo.png",
      roles: [
        {
          title: "Software Engineer",
          period: "August 2019 - July 2021",
          details: [
            "Streamlined deployments on client Linux VMs, which increased overall productivity by 30%",
            "Configured HAProxy for optimized load balancing",
            "Automated deployment using Ansible playbooks",
          ],
        },
      ],
    },
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
            <Trophy className="w-8 h-8 text-cyan-400 flex-shrink-0" />
            <SectionTitle>Professional Experience</SectionTitle>
          </div>
        </motion.div>

        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {experiences.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1e2436] p-4 md:p-6 rounded-xl border border-cyan-500/20 
                  shadow-lg hover:shadow-cyan-400/20 transition-all duration-300
                  hover:border-cyan-500/40 relative overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6 
                      rounded-full overflow-hidden border-4 border-cyan-400/20
                      shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
                  >
                    <img
                      src={company.logo}
                      alt={`${company.company} Logo`}
                      className="w-full h-full object-contain p-2"
                    />
                  </motion.div>

                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-transparent 
                      bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500
                      text-center md:text-left mb-4"
                    >
                      {company.company}
                    </h2>
                    
                    <div className="space-y-6">
                      {company.roles.map((role, roleIndex) => (
                        <motion.div
                          key={roleIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 + roleIndex * 0.1 }}
                          className="border-t border-cyan-500/10 pt-4 first:border-0 first:pt-0"
                        >
                          <h3 className="text-lg md:text-xl font-semibold text-cyan-300">
                            {role.title}
                          </h3>
                          <p className="text-sm md:text-base mt-1 text-cyan-400/80">
                            {role.period}
                          </p>
                          <ul className="list-disc pl-5 mt-3 space-y-2">
                            {role.details.map((item, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className="text-sm md:text-base text-gray-300"
                              >
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 
                    transform rotate-12 translate-y-1/2"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          className="flex justify-between mt-6 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <StyledButton onClick={() => handleNavigation('prev')}>Back</StyledButton>
          <StyledButton onClick={closeModal}>Main Menu</StyledButton>
          <StyledButton onClick={() => handleNavigation('next')}>Next</StyledButton>
        </motion.div>
      </motion.div>
    </ModalContainer>
  );
}

export default Experience;
