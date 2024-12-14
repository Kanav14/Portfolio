import React from "react";

const ModalButton = ({ onClick, children }) => (
  <button
    className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md font-bold hover:bg-cyan-500 transition-all"
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
    <div className="container bg-gray-900 text-white p-6 h-full overflow-y-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-400 animate-pulse">
        Educational Journey
      </h1>
      <div className="space-y-8">
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-md shadow-md flex items-center">
            <img
              src={edu.logo}
              alt={`${edu.institution} Logo`}
              className="w-32 h-32 mr-6 rounded-full object-cover border-4 border-cyan-400"
            />
            <div>
              <h2 className="text-2xl font-bold text-cyan-300">{edu.degree}</h2>
              <p className="mt-2 text-lg">
                <strong>{edu.institution}</strong> | {edu.location}
              </p>
              <p className="mt-2 text-md">{edu.graduation}</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                {edu.highlights.map((item, idx) => (
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

export default Education;
