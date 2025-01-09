import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Database, Cloud, GitBranch, Wrench } from 'lucide-react';
import { ModalContainer, StyledButton, SectionTitle } from './ModalContainer';

function SkillsAndKnowledge({ closeModal, goToNext, goToPrevious }) {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code2 className="w-5 h-5" />,
      color: "from-blue-400 to-blue-600",
      skills: ["Python", "PowerShell", "Groovy", "YAML"],
    },
    {
      category: "DevOps Tools",
      icon: <Wrench className="w-5 h-5" />,
      color: "from-green-400 to-green-600",
      skills: [
        "Ansible",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Helm",
        "Vault",
        "ArgoCD",
        "HashiCorp Vault",
      ],
    },
    {
      category: "Cloud & Monitoring",
      icon: <Cloud className="w-5 h-5" />,
      color: "from-purple-400 to-purple-600",
      skills: [
        "AWS",
        "Azure",
        "Prometheus",
        "Grafana",
        "ELK Stack",
      ],
    },
    {
      category: "Databases",
      icon: <Database className="w-5 h-5" />,
      color: "from-yellow-400 to-yellow-600",
      skills: ["Kafka", "PostgreSQL", "SQL", "Cloudera"],
    },
    {
      category: "CI/CD & Automation",
      icon: <GitBranch className="w-5 h-5" />,
      color: "from-red-400 to-red-600",
      skills: ["Nexus", "GitHub Actions"],
    },
    {
      category: "Emerging Technologies",
      icon: <Cpu className="w-5 h-5" />,
      color: "from-cyan-400 to-cyan-600",
      skills: [
        "Generative AI",
        "Machine Learning",
        "LLM Integration",
        "AI-Driven DevOps",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
        <Code2 className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
        <SectionTitle>Skills & Knowledge Base</SectionTitle>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {skillCategories.map((category, index) => (
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
                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} 
                  text-white`}>
                  {category.icon}
                </div>
                <h2 className="text-lg md:text-xl font-bold text-cyan-300">
                  {category.category}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${category.color} 
                      bg-opacity-10 text-white backdrop-blur-sm border border-white/10`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} 
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

export default SkillsAndKnowledge;
