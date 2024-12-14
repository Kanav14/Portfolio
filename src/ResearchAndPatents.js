import React from "react";

const ModalButton = ({ onClick, children }) => (
  <button
    className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md font-bold hover:bg-cyan-500 transition-all"
    onClick={onClick}
  >
    {children}
  </button>
);

function ResearchAndPatents({ closeModal, goToNext, goToPrevious }) {
  const patents = [
    {
      title: "Cricket Monitoring System",
      patentNumber: "201911004796",
      highlights: [
        "Developed a microwave-based monitoring system with 99% accuracy",
        "Innovative approach to tracking and analyzing cricket performance",
        "Demonstrates advanced signal processing and machine learning techniques",
      ],
    },
    {
      title: "AI-Driven Consumer Behavior Analysis",
      patentNumber: "201911031034",
      highlights: [
        "Artificial Intelligence system for analyzing consumer behavior",
        "85% efficiency in predicting loan lending outcomes",
        "Utilizes advanced machine learning algorithms for financial risk assessment",
      ],
    },
  ];

  const researchInterests = [
    "AI-Driven Infrastructure Optimization",
    "Machine Learning in Cloud Resource Management",
    "DevOps and Generative AI Integration",
  ];

  return (
    <div className="container bg-gray-900 text-white p-6 h-full overflow-y-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-400 animate-pulse">
        Research and Patents
      </h1>
      <div className="space-y-8">
        {patents.map((patent, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-cyan-300">{patent.title}</h2>
            <p className="mt-2 text-lg">
              <strong>Patent Number:</strong> {patent.patentNumber}
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              {patent.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-cyan-300">Current Research Interests</h2>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            {researchInterests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <ModalButton onClick={goToPrevious}>Back</ModalButton>
        <ModalButton onClick={closeModal}>Main Menu</ModalButton>
        <ModalButton onClick={goToNext}>Next</ModalButton>
      </div>
    </div>
  );
}

export default ResearchAndPatents;
