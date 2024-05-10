import React from "react";
import { Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import ProfImg from "../../assets/3d.png";

const Navbar = () => {
  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-[97%] bg-white flex justify-between items-center px-10 rounded-lg mx-[1.5%] my-5 fixed z-10 top-0"
      >
        <div>
          <h2 className=" text-blue-700 font-bold text-4xl">EDMS</h2>
        </div>
        <div className="flex items-center">
          <a href="/" className="border m-3 rounded-full w-14 h-14 p-2"><img src={ProfImg} alt="profile image"/></a>
          
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
