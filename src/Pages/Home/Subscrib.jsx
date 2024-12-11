import React from "react";
import { motion } from "framer-motion";

const Subscrib = () => {
  return (
    <footer className="bg-white w-11/12 py-6 mx-auto  border-t">
      {/* Subscription Section */}
      <div className="bg-blue-500 py-28 mt-8 rounded-lg text-center">
        <motion.h3 
        animate={{x:[0, 50, 0]}}
        transition={{duration:5,repeat: Infinity}}
        className="text-4xl font-bold text-white">
          New Things Will Always Update Regularly
        </motion.h3>
        <div className="mt-6 flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email here"
            className="p-3 rounded-l-lg w-80 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Subscrib;
