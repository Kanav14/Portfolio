import React from "react";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* "Hello World" Section */}
      <section id="hello-world" className="flex h-screen">
        {/* Left Side */}
        <div className="flex-1 bg-black text-white flex items-center justify-center">
          <h1 className="text-6xl font-bold animate-pulse">Hello World</h1>
        </div>
        {/* Right Side */}
        <div className="flex-1 bg-efefef flex items-center justify-center">
          <img
            src="your-animation.gif"
            alt="GIF Animation"
            className="w-3/4 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section id="portfolio-grid" className="p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="section-card hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500">
            About Me
          </div>
          <div className="section-card hover:bg-gradient-to-br hover:from-green-500 hover:to-teal-500">
            Projects
          </div>
          <div className="section-card hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500">
            Experience
          </div>
          <div className="section-card hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-500">
            Education
          </div>
          <div className="section-card-main hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600">
            <h1 className="text-4xl font-bold text-white">Kanav Sharma</h1>
            <p className="text-xl text-cyan-400">DevOps Engineer</p>
          </div>
          <div className="section-card hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500">
            Certifications
          </div>
          <div className="section-card hover:bg-gradient-to-br hover:from-lime-500 hover:to-green-500">
            Skills and Knowledge Base
          </div>
          <div className="section-card hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500">
            Extra Curricular
          </div>
          <div className="section-card hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-500">
            Research and Patents
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
