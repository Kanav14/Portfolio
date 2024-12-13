import React from 'react';

function Experience() {
  return (
    <div className="container bg-gray-900 text-white h-full overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>

      <div className="space-y-8">
        {/* Amdocs: DevOps Engineer - Experienced */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold">DevOps Engineer - Experienced</h2>
          <p className="mt-2 text-lg">
            <strong>Aug 2021 - Aug 2022 | Pune</strong>
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>Led Digital Experience R&D Team to automate artifact management in Nexus, reducing manual effort by 40%.</li>
            <li>Developed automation scripts using Shell, Groovy, and Python, achieving a 30% faster release cycle.</li>
            <li>Built AWS infrastructure for deploying Helm charts on EKS, cutting deployment times by 25%.</li>
            <li>Automated OpenShift cluster installations, reducing setup time by 40% and completing 15+ installations monthly.</li>
            <li>Designed and implemented a Vault automation tool for secret management, handling 500+ secrets monthly.</li>
          </ul>
        </div>

        {/* Amdocs: DevOps Engineer - Advanced */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold">DevOps Engineer - Advanced</h2>
          <p className="mt-2 text-lg">
            <strong>Aug 2022 - Aug 2024 | Pune</strong>
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>Conducted disaster recovery drills across 320+ applications, ensuring a 100% success rate.</li>
            <li>Managed helm deployments with CI/CD pipeline, ensuring 99.9% uptime.</li>
            <li>Designed and developed a Generative AI tool for internal usage to find solutions for repeated errors using LLM.</li>
          </ul>
        </div>

        {/* Nihilent Ltd */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold">Software Engineer</h2>
          <p className="mt-2 text-lg">
            <strong>Aug 2019 - Jul 2021 | Pune</strong>
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>Deployed Java applications on VMware using Ansible, ensuring 99.9% environment consistency for HSBC.</li>
            <li>Automated Selenium tests with Ansible Tower, increasing test execution speed by 25%.</li>
            <li>Implemented centralized logging and monitoring for troubleshooting, reducing incident response time by 40%.</li>
          </ul>
        </div>
      </div>

      {/* Back and Next Buttons */}
      <div className="flex justify-between mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Back</button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Next</button>
      </div>
    </div>
  );
}

export default Experience;
