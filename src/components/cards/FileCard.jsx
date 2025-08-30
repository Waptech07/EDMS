import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  Description,
  PictureAsPdf,
  InsertDriveFile,
  TableChart,
} from "@mui/icons-material";

const FileCard = ({ file, onClick }) => {
  const getIcon = (type) => {
    switch (type) {
      case "pdf":
        return <PictureAsPdf style={{ fontSize: "5em" }} color="secondary" />;
      case "word":
        return <Description style={{ fontSize: "5em" }} color="primary" />;
      case "excel":
        return <TableChart style={{ fontSize: "5em" }} color="success" />;
      default:
        return <InsertDriveFile style={{ fontSize: "5em" }} color="action" />;
    }
  };

  if (!file) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="bg-white rounded-lg shadow-md p-4 m-2 border-t cursor-pointer"
      onClick={() => onClick(file)}
    >
      <div className="flex justify-center items-center m-4">
        {getIcon(file.type)}
      </div>
      <h3 className="text-lg font-semibold mb-2">{file.name}</h3>
      <div className="flex justify-between mt-4">
        <span className="text-xs text-gray-400">{file.dateModified}</span>
        <span className="text-xs text-gray-400">{file.size}</span>
      </div>
    </motion.div>
  );
};

FileCard.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dateModified: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FileCard;
