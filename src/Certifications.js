import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const ModalButton = ({ onClick, children }) => (
  <button
    className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md font-bold hover:bg-cyan-500 transition-all shadow-lg hover:shadow-cyan-400/50"
    onClick={onClick}
  >
    {children}
  </button>
);

function Certifications({ closeModal, goToNext, goToPrevious }) {
  const certifications = [
    {
      title: "Azure DevOps Engineer Expert",
      provider: "Microsoft Certification",
      imageUrl: "https://via.placeholder.com/150/36cfc1/000000?text=Azure+Cert",
      description: [
        "Advanced certification demonstrating expertise in DevOps practices",
        "Validated skills in implementing DevOps processes using Azure technologies",
        "Comprehensive understanding of continuous integration and deployment strategies",
      ],
    },
    {
      title: "AWS DevOps Engineer Professional",
      provider: "Amazon Web Services Certification",
      imageUrl: "https://via.placeholder.com/150/36cfc1/000000?text=AWS+Cert",
      description: [
        "Professional-level certification in AWS cloud infrastructure and DevOps",
        "Proven expertise in provisioning, operating, and managing distributed applications",
        "In-depth knowledge of AWS services and best practices",
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
        <Award className="w-8 h-8 text-cyan-400 mr-2" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-cyan-400">
          Professional Certifications
        </h1>
      </motion.div>
      
      <div className="space-y-6 md:space-y-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 p-4 md:p-6 rounded-md shadow-md flex flex-col md:flex-row items-center"
          >
            <div className="w-full md:w-48 mb-4 md:mb-0 md:mr-6">
              <img
                src={cert.imageUrl}
                alt={`${cert.title} Logo`}
                className="w-full h-32 rounded-lg object-cover border-2 border-cyan-400 hover:border-cyan-300 transition-colors"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold text-cyan-300">{cert.title}</h2>
              <p className="mt-2 text-base md:text-lg">
                <strong>{cert.provider}</strong>
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                {cert.description.map((item, idx) => (
                  <li key={idx} className="text-sm md:text-base">{item}</li>
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

export default Certifications;
