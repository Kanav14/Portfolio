import React from 'react';

function Experience() {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>

      <div className="space-y-8">
        {/* Amdocs Experience */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <div className="flex items-center space-x-4">
            <img
              src="/images/amdocs-logo.png" // Use local path for Amdocs logo
              alt="Amdocs Logo"
              className="h-12 w-auto"
            />
            <h2 className="text-2xl font-bold">Amdocs - DevOps Engineer</h2>
          </div>
          <p className="text-lg mt-2">
            <strong>Aug 2021 - Aug 2024 | Pune</strong>
          </p>
          <ul className="mt-4 space-y-2">
            <li>Led Digital Experience R&D Team to automate artifact management in Nexus, reducing manual effort by 40%.</li>
            <li>Developed automation scripts using Shell, Groovy, and Python, improving release cycle speed by 30%.</li>
            <li>Built AWS infrastructure for deploying Helm charts on EKS, decreasing deployment times by 25%.</li>
            <li>Conducted disaster recovery drills across 320+ applications, ensuring 100% success rate.</li>
            <li>Automated OpenShift cluster installations for “Catalog One” & “Digital One” Applications using Jenkins, reducing setup time by 40%.</li>
          </ul>
        </div>

        {/* Nihilent Experience */}
        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <div className="flex items-center space-x-4">
            <img
              src="/images/nihilent-logo.png" // Use local path for Nihilent logo
              alt="Nihilent Ltd Logo"
              className="h-12 w-auto"
            />
            <h2 className="text-2xl font-bold">Nihilent Ltd - Software Engineer</h2>
          </div>
          <p className="text-lg mt-2">
            <strong>Aug 2019 - Jul 2021</strong>
          </p>
          <ul className="mt-4 space-y-2">
            <li>Deployed Java applications on VMware using Ansible, ensuring 99.9% environment consistency for HSBC.</li>
            <li>Streamlined deployments on client Linux VMs, cutting deployment time by 30%.</li>
            <li>Automated Selenium tests with Ansible Tower, boosting test execution speed by 25%.</li>
            <li>Implemented centralized logging and monitoring for troubleshooting, reducing incident response time by 40%.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
