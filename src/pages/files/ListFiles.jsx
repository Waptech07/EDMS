import React, { useState } from "react";
import { motion } from "framer-motion";
import FileCard from "../../components/cards/FileCard";
import SearchBar from "../../components/search/SearchBar";
import FileViewerDialog from "../../components/cards/FileViewer";
import { files } from "../../assets/dummy"; // Ensure the correct import path

const ListFiles = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleClose = () => {
    setSelectedFile(null);
  };

  return (
    <>
      <section>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white p-5 rounded-lg shadow-lg lg:my-28 mb-10 mx-5 lg:w-[70%] lg:fixed right-0 top-0 lg:h-[80%] overflow-y-auto"
        >
          <div className="flex justify-between my-2">
            <SearchBar
              size={"medium"}
              searchClass={"w-full"}
              placeholder={"Search files..."}
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Files</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {files.map((file) => (
              <FileCard key={file.id} file={file} onClick={handleFileClick} />
            ))}
          </div>
        </motion.div>
      </section>
      {selectedFile && (
        <FileViewerDialog
          file={selectedFile}
          open={!!selectedFile}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default ListFiles;
