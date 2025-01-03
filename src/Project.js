import React from "react";
import { motion } from "framer-motion";
import { Rocket } from 'lucide-react';
import { ModalContainer, StyledButton, SectionTitle } from './ModalContainer';

function Projects({ closeModal, goToNext, goToPrevious }) {
  const projects = [
    {
      title: "AI-Driven Infrastructure Optimization with AWS",
      icon: "🤖",
      overview:
        "Developed an AI-powered tool using PyTorch to optimize AWS resources, improving infrastructure efficiency and reducing costs.",
      problem:
        "Many organizations struggle with optimizing AWS resources, leading to unnecessary costs and underutilization of resources.",
      solution:
        "Built an AI model to analyze AWS resource usage, automatically scaling EC2 instances with Lambda and monitoring using CloudWatch.",
      impact: "Reduced AWS costs by 25% and improved resource allocation by 40%.",
      technologies: ["PyTorch", "AWS Lambda", "CloudWatch", "SageMaker", "Python"],
    },
    {
      title: "Kubernetes-based CI/CD Pipeline",
      icon: "⚙️",
      overview:
        "Created a CI/CD pipeline for web applications using Kubernetes and AWS EKS, automating build, test, and deployment processes.",
      problem:
        "Traditional deployment methods were slow and error-prone, affecting development cycles and time-to-market.",
      solution:
        "Leveraged Kubernetes, Helm, and Jenkins to build a fully automated pipeline, ensuring seamless scaling and faster delivery.",
      impact: "Reduced deployment times by 40% and improved scalability.",
      technologies: ["Kubernetes", "Helm", "Jenkins", "AWS EKS", "Terraform", "GitHub Actions"],
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
        <Rocket className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
        <SectionTitle>Projects</SectionTitle>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {projects.map((project, index) => (
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
                <span className="text-2xl md:text-3xl">{project.icon}</span>
                <h2 className="text-xl md:text-2xl font-bold text-transparent 
                  bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {project.title}
                </h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  {[
                    { label: "Overview", content: project.overview },
                    { label: "Problem", content: project.problem },
                    { label: "Solution", content: project.solution },
                    { label: "Impact", content: project.impact },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <span className="font-semibold text-cyan-300">{item.label}: </span>
                      <span className="text-gray-300">{item.content}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 
                        text-cyan-400 border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 transform -rotate-12 translate-y-1/2" />
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

export default Projects;
