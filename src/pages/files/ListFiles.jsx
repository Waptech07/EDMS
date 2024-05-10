import { motion } from "framer-motion";
import React from "react";
import FileCard from "../../components/cards/FileCard";
import FolderCard from "../../components/cards/FolderCard";
import SearchBar from "../../components/search/SearchBar";

const ListFiles = () => {
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
            <SearchBar size={"medium"} searchClass={"w-full"} placeholder={"Search files..."} />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Files</h2>
          {/* <div>
          {files.map((file, index) => (
            <FileCard file={file}/>
          ))}
        </div> */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            <FileCard/>
            <FileCard/>
            <FileCard/>
            <FileCard/>
            <FileCard/>
            <FileCard/>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ListFiles;
