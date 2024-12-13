import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AboutMe from './AboutMe';

function App() {
  const [showHelloWorld, setShowHelloWorld] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHelloWorld(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 1, text: "About Me", link: "/about" },
    { id: 2, text: "Projects", link: "/projects" },
    { id: 3, text: "Experience", link: "/experience" },
    { id: 4, text: "Education", link: "/education" },
    { id: 5, isHighlight: true },
    { id: 6, text: "Certifications", link: "/certifications" },
    { id: 7, text: "Skills and Knowledge Base", link: "/skills" },
    { id: 8, text: "Extra Curricular", link: "/extracurricular" },
    { id: 9, text: "Research and Patents", link: "/research" },
  ];

  return (
    <Router>
      <div className="relative w-full h-screen bg-overall-gradient">
        {showHelloWorld ? (
          <div className="flex h-full">
            <div className="flex-1 bg-black flex justify-center items-center">
              <motion.h1
                className="text-white text-8xl font-extrabold animate-hanging"
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
              >
                Hello World!
              </motion.h1>
            </div>
            <div className="flex-1 bg-[#efefef] flex justify-center items-center relative">
              <img
                src="https://i.giphy.com/media/WtTnAfZn6aVJfBzlN3/giphy.gif"
                alt="Cloud with rain"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-auto max-w-full"
              />
            </div>
          </div>
        ) : (
          <Switch>
            <Route exact path="/">
              <div className="relative w-full h-screen overflow-hidden">
                <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
                  {sections.map((section) => (
                    <Link
                      key={section.id}
                      to={section.link || "#"}
                      className={`relative m-2 ${
                        section.isHighlight
                          ? "bg-black text-white shadow-highlight border border-cyan-400"
                          : "bg-white text-black border border-gray-200 rounded-lg shadow-md"
                      } flex justify-center items-center cursor-pointer hover:shadow-lg transition-transform duration-300`}
                    >
                      {section.isHighlight ? (
                        <div className="text-center">
                          <motion.h1
                            className="text-5xl font-extrabold"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          >
                            Kanav Sharma
                          </motion.h1>
                          <motion.p
                            className="text-2xl mt-2 font-medium text-cyan-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 1.5,
                              ease: "easeOut",
                              delay: 0.3,
                            }}
                          >
                            DevOps Engineer
                          </motion.p>
                        </div>
                      ) : (
                        <p>{section.text}</p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </Route>
            <Route path="/about">
              <AboutMe />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
