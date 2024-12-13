import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <div className="relative w-full min-h-screen bg-overall-gradient flex items-center justify-center p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Profile Image */}
        <motion.div 
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-highlight border-4 border-cyan-400">
            {/* Replace with your GitHub profile image URL */}
            <img 
              src="https://github.com/yourusername/your-image.jpg" 
              alt="Kanav Sharma" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side: About Text */}
        <motion.div 
          className="text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Hi, I'm Kanav Sharma, a passionate DevOps Engineer with a strong background in 
              cloud infrastructure, containerization, and continuous integration/continuous deployment (CI/CD) strategies.
            </p>
            <p>
              With expertise in tools like Docker, Kubernetes, AWS, and Jenkins, I specialize in 
              automating and streamlining software development and deployment processes to enhance 
              efficiency and reliability.
            </p>
            <p>
              My approach combines technical excellence with a collaborative mindset, always 
              seeking innovative solutions to complex infrastructure challenges.
            </p>
          </div>
          
          {/* Quick Stats or Skills Highlight */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[
              { label: 'DevOps Tools', value: '10+' },
              { label: 'Cloud Platforms', value: '3+' },
              { label: 'Certifications', value: '5+' }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="bg-black p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-cyan-400">{stat.value}</h3>
                <p className="text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact or LinkedIn Button */}
          <motion.button
            className="mt-8 px-6 py-3 bg-cyan-400 text-black font-bold rounded-full hover:bg-cyan-300 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            onClick={() => window.open('https://www.linkedin.com/in/yourusername', '_blank')}
          >
            Connect on LinkedIn
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
