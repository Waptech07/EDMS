import React from "react";
import { Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import HomeImg from "../../assets/home.png";
import HomeBgImg from "../../assets/homeBg.jpg";

const Home = () => {
  return (
    <>
      <section
        className="bg-contain"
        style={{ backgroundImage: `url(${HomeBgImg})` }}
      >
        <div className="flex justify-center items-center p-20 gap-20 backdrop-blur-sm backdrop-brightness-50 h-screen">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex-1 text-left space-y-8 text-white"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-4xl font-bold text-blue-800"
            >
              EDMS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-base font-semibold text-blue-800"
            >
              Welcome to our file management application! Our platform offers a
              seamless solution for uploading, organizing, and accessing your
              files and folders with ease.
            </motion.p>
            <Stack direction="row" spacing={2} alignItems={"center"}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Button variant="contained" color="info">
                  Get Started
                </Button>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <Button variant="outlined" color="inherit">
                  Contact Us
                </Button>
              </motion.div>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex-1"
          >
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              src={HomeImg}
              className="h-full w-full"
              alt="welcome to maxmayor"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
