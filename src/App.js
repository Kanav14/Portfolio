import React from "react";
import { motion } from "framer-motion";

function App() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black grid grid-cols-4 grid-rows-2 gap-2 p-4">
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          className="border-dotted border-2 border-gray-500 flex items-center justify-center"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.2, duration: 0.8 }}
        >
          <h1 className="text-white text-2xl font-bold">{`Section ${index + 1}`}</h1>
        </motion.div>
      ))}
    </div>
  );
}

export default App;
