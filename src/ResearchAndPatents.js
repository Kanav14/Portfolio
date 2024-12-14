import React from 'react';

function ResearchAndPatents({ closeModal, goToNext, goToPrevious }) {
  return (
    <div className="container bg-gray-900 text-white h-full overflow-y-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-400 animate-pulse">
        Research and Patents
      </h1>
      <div className="space-y-8">
        {/* Cricket Monitoring System Patent */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-cyan-300">Cricket Monitoring System</h2>
          <p className="mt-2 text-lg">
            <strong>Patent Number: 201911004796</strong>
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>Developed a microwave-based monitoring system with 99% accuracy</li>
            <li>Innovative approach to tracking and analyzing cricket performance</li>
            <li>Demonstrates advanced signal processing and machine learning techniques</li>
          </ul>
        </div>

        {/* Consumer Behavior Analysis Patent */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-cyan-300">AI-Driven Consumer Behavior Analysis</h2>
          <p className="mt-2 text-lg">
            <strong>Patent Number: 201911031034</strong>
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>Artificial Intelligence system for analyzing consumer behavior</li>
            <li>85% efficiency in predicting loan lending outcomes</li>
            <li>Utilizes advanced machine learning algorithms for financial risk assessment</li>
          </ul>
        </div>

        {/* Additional Research */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-cyan-300">Current Research Interests</h2>
          <ul className="list-disc pl-5 mt-4">
            <li>AI-Driven Infrastructure Optimization</li>
            <li>Machine Learning in Cloud Resource Management</li>
            <li>DevOps and Generative AI Integration</li>
          </ul>
        </div>
      </div>

      {/* Modal Buttons */}
      <div className="modal-buttons">
        <button className="modal-button" onClick={goToPrevious}>
          Back
        </button>
        <button className="modal-button" onClick={closeModal}>
          Main Menu
        </button>
        <button className="modal-button" onClick={goToNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ResearchAndPatents;
