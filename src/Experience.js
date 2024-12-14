import React from "react";

const ModalButton = ({ onClick, children }) => (
  <button
    className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md font-bold hover:bg-cyan-500 transition-all"
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
    <div className="container bg-gray-900 text-white p-6 h-full overflow-y-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-400 animate-pulse">
        Professional Experience
      </h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-md shadow-md flex items-center">
            <img
              src={exp.logo}
              alt={`${exp.company} Logo`}
              className="w-32 h-32 mr-6 rounded-full object-cover border-4 border-cyan-400"
            />
            <div>
              <h2 className="text-2xl font-bold text-cyan-300">{exp.role}</h2>
              <p className="mt-2 text-lg">
                <strong>{exp.company}</strong> | Full-time
              </p>
              <p className="mt-2 text-md">{exp.period}</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                {exp.details.map((item, idx) => (
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

export default Experience;
