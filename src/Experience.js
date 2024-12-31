import React from "react";

const ModalButton = ({ onClick, children }) => (
  <button
    className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-md font-bold hover:bg-cyan-500 transition-all text-sm md:text-base"
    onClick={onClick}
  >
    {children}
  </button>
);

function Experience({ closeModal, goToNext, goToPrevious }) {
  const experiences = [
    {
      company: "Amdocs",
      logo: "https://via.placeholder.com/150/36cfc1/000000?text=Amdocs",
      roles: [
        {
          title: "DevOps Engineer (Experienced)",
          period: "July 2022 - Present",
          details: [
            "Lead DevOps initiatives for complex cloud infrastructure projects",
            "Architect and implement scalable CI/CD pipelines using Jenkins, GitHub Actions",
            "Optimize cloud resources and implement infrastructure as code with Terraform",
          ],
        },
        {
          title: "DevOps Engineer (Advanced)",
          period: "January 2021 - June 2022",
          details: [
            "Developed and maintained robust CI/CD workflows",
            "Implemented containerization strategies using Docker and Kubernetes",
            "Automated infrastructure provisioning and configuration management",
          ],
        },
      ],
    },
    {
      company: "Nihilent Ltd",
      logo: "https://via.placeholder.com/150/36cfc1/000000?text=Nihilent",
      roles: [
        {
          title: "Software Engineer",
          period: "July 2019 - December 2020",
          details: [
            "Supported cloud migration and DevOps transformation initiatives",
            "Implemented monitoring and logging solutions using ELK stack",
            "Collaborated with cross-functional teams to improve deployment processes",
          ],
        },
      ],
    },
  ];

  return (
    <div className="container bg-gray-900 text-white p-3 md:p-6 h-full overflow-y-auto">
      <h1 className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-6 text-center text-cyan-400 animate-pulse">
        Professional Experience
      </h1>
      <div className="space-y-6 md:space-y-8">
        {experiences.map((company, index) => (
          <div key={index} className="bg-gray-800 p-4 md:p-6 rounded-md shadow-md">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <img
                src={company.logo}
                alt={`${company.company} Logo`}
                className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6 rounded-full object-cover border-4 border-cyan-400"
              />
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-cyan-300 text-center md:text-left mb-4">
                  {company.company}
                </h2>
                <div className="space-y-6">
                  {company.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="border-t border-gray-700 pt-4 first:border-0 first:pt-0">
                      <h3 className="text-lg md:text-xl font-semibold text-cyan-100">
                        {role.title}
                      </h3>
                      <p className="text-sm md:text-base mt-1 text-gray-300">{role.period}</p>
                      <ul className="list-disc pl-5 mt-3 space-y-2">
                        {role.details.map((item, idx) => (
                          <li key={idx} className="text-sm md:text-base">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6 md:mt-8">
        <ModalButton onClick={goToPrevious}>Back</ModalButton>
        <ModalButton onClick={closeModal}>Main Menu</ModalButton>
        <ModalButton onClick={goToNext}>Next</ModalButton>
      </div>
    </div>
  );
}

export default Experience;
