import React from "react";
import { motion } from "framer-motion";
import { Image } from "@mui/icons-material";

const ImageCard = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="bg-white rounded-lg shadow-md p-4 m-2 border-t"
      >
        <div className="flex justify-center items-center m-4">
          <Image style={{ fontSize: "6em" }} color="success" />
        </div>
        <h3 className="text-base font-semibold mb-2">Hello</h3>
        <div className="flex justify-between mt-4">
          <span className="text-xs text-gray-400">12-03-2023</span>
          <span className="text-xs text-gray-400">10mb</span>
        </div>
      </motion.div>
    </>
  );
};

export default ImageCard;
