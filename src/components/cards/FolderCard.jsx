import React from "react";
import { motion } from "framer-motion";
import { Folder } from "@mui/icons-material";

const FolderCard = ({ folder }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="bg-white rounded-lg shadow-md p-4 m-2 border-t"
    >
      <div className="flex justify-center items-center m-4">
        <Folder style={{ fontSize: "5em", color: "#FD3" }} />
      </div>
      <h3 className="text-lg font-semibold mb-2">Folder</h3>
      <p className="text-sm text-gray-500">Desc</p>
      <div className="flex justify-between mt-4">
        <span className="text-xs text-gray-400">02-05-2023</span>
        <span className="text-xs text-gray-400">10 files</span>
      </div>
    </motion.div>
  );
};

export default FolderCard;
