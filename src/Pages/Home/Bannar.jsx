import React from "react";
import { motion } from "framer-motion";
import team1 from "../../assets/team1 (1).jpg";
import team2 from "../../assets/team1 (2).jpg";
// x: [0, 200, 0] ,
function Bannar() {
  return (
    <div>
      <div className="hero py-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.img
            src={team1}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-96 z-20 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />

          <motion.img
            src={team2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            className="max-w-sm w-96 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
          <div className="">
            <motion.h1 
              animate={{ color: ["#04aaf7", "#3bfd07", "#ff6133"] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="text-5xl font-bold"
            >
              The Easiest Way to Get <br />
            </motion.h1>
            <p className="py-6">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
            <button className="btn bg-blue-500 text-gray-100 font-xl font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bannar;
