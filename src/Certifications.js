import React from "react";

const ModalButton = ({ onClick, children }) => (
  <button
    className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md font-bold hover:bg-cyan-500 transition-all"
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
    <div className="container bg-gray-900 text-white p-6 h-full overflow-y-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-400 animate-pulse">
        Professional Certifications
      </h1>
      <div className="space-y-8">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-md shadow-md flex items-center">
            <img
              src={cert.imageUrl}
              alt={`${cert.title} Logo`}
              className="w-48 h-32 mr-6 rounded-lg object-cover border-2 border-cyan-400"
            />
            <div>
              <h2 className="text-2xl font-bold text-cyan-300">{cert.title}</h2>
              <p className="mt-2 text-lg">
                <strong>{cert.provider}</strong>
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                {cert.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <ModalButton onClick={goToPrevious}>Back</ModalButton>
        <ModalButton onClick={closeModal}>Main Menu</ModalButton>
        <ModalButton onClick={goToNext}>Next</ModalButton>
      </div>
    </div>
  );
}

export default Certifications;
