import React from "react";
import { motion } from "framer-motion";
import { FolderZip } from "@mui/icons-material";

const ZipFileCard = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="bg-white rounded-lg shadow-md p-4 m-2 border-t"
      >
        <div className="flex justify-center items-center m-4">
          <FolderZip style={{ fontSize: "5em" }} color="primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Hello</h3>
        <div className="flex justify-between mt-4">
          <span className="text-xs text-gray-400">02-04-2024</span>
          <span className="text-xs text-gray-400">1mb</span>
        </div>
      </motion.div>
    </>
  );
};

export default ZipFileCard;
