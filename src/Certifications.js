import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { ModalContainer, StyledButton, SectionTitle } from './ModalContainer';

function Certifications({ closeModal, goToNext, goToPrevious }) {
  const certifications = [
    {
      title: "Azure DevOps Engineer Expert",
      provider: "Microsoft",
      imageUrl: "https://raw.githubusercontent.com/Kanav14/Portfolio/refs/heads/main/images/Azure_DevOps.jpg", // Add certification logo
      description: [
        "Advanced certification demonstrating expertise in DevOps practices",
        "Validated skills in implementing DevOps processes using Azure technologies",
        "Comprehensive understanding of continuous integration and deployment strategies",
      ],
      date: "2021",
      badgeColor: "from-blue-400 to-blue-600"
    },
    {
      title: "AWS DevOps Engineer Professional",
      provider: "Amazon Web Services (AWS)",
      imageUrl: "https://media.licdn.com/dms/image/v2/C4D22AQEbwcdeIq1wiA/feedshare-shrink_800/feedshare-shrink_800/0/1653450991804?e=1738800000&v=beta&t=WLG1kLwsitKR1QatwWuGCSpYY81APfhZonGWzSZ82TU", // Add certification logo
      description: [
        "Professional-level certification in AWS cloud infrastructure and DevOps",
        "Proven expertise in provisioning, operating, and managing distributed applications",
        "In-depth knowledge of AWS services and best practices",
      ],
      date: "2022",
      badgeColor: "from-orange-400 to-orange-600"
    },
   {
    title: "AWS Certified Developer - Associate",
    provider: "Amazon Web Services (AWS)",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4D22AQHuWHB6S8YoJw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1652932560778?e=1738800000&v=beta&t=Ff_S2SJ_SrgC4EiakL-MQ8wA9zMYfcHvFd4ZWHhy2lk", 
    description: [
        "Demonstrates expertise in developing, deploying, and debugging cloud-based applications on AWS.",
        "Validates proficiency with core AWS services, architecture best practices, and CI/CD pipelines.",
        "Focuses on serverless applications, microservices, and security implementations using AWS technologies."
    ],
    date: "2022",
    badgeColor: "from-blue-400 to-blue-600"
},
{
    title: "Microsoft Certified: Azure Administrator Associate",
    provider: "Microsoft",
    imageUrl: "https://raw.githubusercontent.com/Kanav14/Portfolio/refs/heads/main/images/Azure_Associate.jpg", 
    description: [
        "Validates expertise in managing Azure cloud services including storage, security, networking, and compute resources.",
        "Demonstrates proficiency in monitoring and managing Azure identities, governance, and hybrid environments.",
        "Covers implementing, managing, and monitoring Azure resources with a focus on automation and scalability."
    ],
    date: "2021",
    badgeColor: "from-blue-500 to-blue-700"
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
        <Award className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
        <SectionTitle>Professional Certifications</SectionTitle>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4 md:space-y-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#1e2436] p-4 md:p-6 rounded-xl border border-cyan-500/20 
              shadow-lg hover:shadow-cyan-400/20 transition-all duration-300
              hover:border-cyan-500/40 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 relative z-10">
              <motion.div 
                className="w-full md:w-64 shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className={`rounded-lg overflow-hidden bg-gradient-to-br ${cert.badgeColor} p-0.5`}>
                  <div className="bg-[#151922] p-2 rounded-[7px]">
                    <img
                      src={cert.imageUrl}
                      alt={`${cert.title} Logo`}
                      className="w-full h-40 object-contain"
                    />
                  </div>
                </div>
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <div className="space-y-3">
                  <h2 className="text-xl md:text-2xl font-bold text-transparent 
                    bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 
                    text-center md:text-left">
                    {cert.title}
                  </h2>
                  <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-1">
                    <p className="text-base md:text-lg font-medium text-cyan-300">
                      {cert.provider}
                    </p>
                    <p className="text-sm text-cyan-400/80">
                      Achieved: {cert.date}
                    </p>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {cert.description.map((item, idx) => (
                      <li key={idx} className="text-sm md:text-base">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-12 translate-y-1/2" />
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

export default Certifications;
