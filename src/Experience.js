import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ModalButton = ({ onClick, children }) => (
  <button
    className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md font-bold hover:bg-cyan-500 transition-all shadow-lg hover:shadow-cyan-400/50"
    onClick={onClick}
  >
    {children}
  </button>
);

function Experience({ closeModal, goToNext, goToPrevious }) {
  const experiences = [
    {
      role: "DevOps Engineer (Experienced)",
      company: "Amdocs",
      period: "July 2022 - Present",
      logo: "https://via.placeholder.com/150/36cfc1/000000?text=Amdocs",
      details: [
        "Lead DevOps initiatives for complex cloud infrastructure projects",
        "Architect and implement scalable CI/CD pipelines using Jenkins, GitHub Actions",
        "Optimize cloud resources and implement infrastructure as code with Terraform",
      ],
    },
    {
      role: "DevOps Engineer (Advanced)",
      company: "Amdocs",
      period: "January 2021 - June 2022",
      logo: "https://via.placeholder.com/150/36cfc1/000000?text=Amdocs",
      details: [
        "Developed and maintained robust CI/CD workflows",
        "Implemented containerization strategies using Docker and Kubernetes",
        "Automated infrastructure provisioning and configuration management",
      ],
    },
    {
      role: "DevOps Engineer",
      company: "Nihilent Ltd",
      period: "July 2019 - December 2020",
      logo: "https://via.placeholder.com/150/36cfc1/000000?text=Nihilent",
      details: [
        "Supported cloud migration and DevOps transformation initiatives",
        "Implemented monitoring and logging solutions using ELK stack",
        "Collaborated with cross-functional teams to improve deployment processes",
      ],
    },
  ];

  return (
    <div className="container bg-gray-900 text-white p-4 md:p-6 h-full overflow-y-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center mb-6"
      >
        <Briefcase className="w-8 h-8 text-cyan-400 mr-2" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-cyan-400">
          Professional Experience
        </h1>
      </motion.div>

      <div className="space-y-6 md:space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 p-4 md:p-6 rounded-md shadow-md flex flex-col md:flex-row items-center"
          >
            <div className="w-24 md:w-32 mb-4 md:mb-0 md:mr-6">
              <img
                src={exp.logo}
                alt={`${exp.company} Logo`}
                className="w-full h-24 md:h-32 rounded-full object-cover border-4 border-cyan-400 hover:border-cyan-300 transition-colors"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-cyan-300">{exp.role}</h2>
              <p className="mt-2 text-base md:text-lg">
                <strong>{exp.company}</strong> | Full-time
              </p>
              <p className="mt-2 text-sm md:text-md">{exp.period}</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                {exp.details.map((item, idx) => (
                  <li key={idx} className="text-sm md:text-base text-left">{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-between mt-6 md:mt-8 space-x-2"
      >
        <ModalButton onClick={goToPrevious}>Back</ModalButton>
        <ModalButton onClick={closeModal}>Main Menu</ModalButton>
        <ModalButton onClick={goToNext}>Next</ModalButton>
      </motion.div>
    </div>
  );
}

export default Experience;
