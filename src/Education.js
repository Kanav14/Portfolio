import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const ModalButton = ({ onClick, children }) => (
  <button
    className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md font-bold hover:bg-cyan-500 transition-all shadow-lg hover:shadow-cyan-400/50"
    onClick={onClick}
  >
    {children}
  </button>
);

function Education({ closeModal, goToNext, goToPrevious }) {
  const educationDetails = [
    {
      degree: "Master of Science in Information Systems",
      institution: "DePaul University",
      location: "Chicago, IL",
      graduation: "Expected Graduation: June 2026",
      logo: "https://via.placeholder.com/150/36cfc1/000000?text=DePaul",
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
      logo: "https://via.placeholder.com/150/36cfc1/000000?text=CGC",
      highlights: [
        "Comprehensive education in Computer Science and Software Engineering",
        "Strong foundation in programming, algorithms, and software development",
        "Participated in multiple technical projects and innovations",
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
        <GraduationCap className="w-8 h-8 text-cyan-400 mr-2" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-cyan-400">
          Educational Journey
        </h1>
      </motion.div>

      <div className="space-y-6 md:space-y-8">
        {educationDetails.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 p-4 md:p-6 rounded-md shadow-md flex flex-col md:flex-row items-center"
          >
            <div className="w-24 md:w-32 mb-4 md:mb-0 md:mr-6">
              <img
                src={edu.logo}
                alt={`${edu.institution} Logo`}
                className="w-full h-24 md:h-32 rounded-full object-cover border-4 border-cyan-400 hover:border-cyan-300 transition-colors"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-cyan-300">{edu.degree}</h2>
              <p className="mt-2 text-base md:text-lg">
                <strong>{edu.institution}</strong> | {edu.location}
              </p>
              <p className="mt-2 text-sm md:text-md">{edu.graduation}</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                {edu.highlights.map((item, idx) => (
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

export default Education;
