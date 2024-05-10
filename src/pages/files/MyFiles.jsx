import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FileCard from "../../components/cards/FileCard";
import FolderCard from "../../components/cards/FolderCard";
import RecentFile from "../../components/cards/RecentFile";
import SearchBar from "../../components/search/SearchBar";

const MyFiles = ({ files }) => {
  // Function to extract folder structure from file paths
  const extractFolders = (path) => {
    const folders = path.split("/").filter((folder) => folder.trim() !== "");
    return folders;
  };

  // Function to render breadcrumbs
  const renderBreadcrumbs = (folders) => {
    return (
      <div className="flex items-center space-x-2">
        {folders.map((folder, index) => (
          <div key={index}>
            <Link to={`/myfiles/${folders.slice(0, index + 1).join("/")}`}>
              {folder}
            </Link>
            {index !== folders.length - 1 && <span> / </span>}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-white p-5 rounded-lg shadow-lg lg:my-28 mb-10 mx-5 lg:w-[70%] lg:fixed right-0 top-0 lg:h-[80%] overflow-y-auto"
      >
        <div className="flex justify-between my-2">
          <SearchBar
            size={"small"}
            searchClass={"w-48 text-black"}
            placeholder={"Search..."}
          />
        </div>
        <div className="flex justify-between items-center my-4">
          <h2 className="text-2xl font-semibold">Files</h2>
          <a href="/files" className="text-lg font-medium">View All</a>
        </div>
        {/* <div>
          {files.map((file, index) => (
            <FileCard file={file}/>
          ))}
        </div> */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          <FileCard />
          <FileCard />
          <FileCard />
        </div>
        <div className="flex justify-between items-center my-4">
          <h2 className="text-2xl font-semibold">Folders</h2>
          <a href="/folders" className="text-lg font-medium">View All</a>
        </div>
        <div className="grid grid-cols-3">
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
        </div>
        <div className="flex justify-between items-center my-4">
          <h2 className="text-2xl font-semibold">Recent Files</h2>
          <a href="/recent-files" className="text-lg font-medium">View All</a>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date Modified
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Size
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Members
              </th>
            </tr>
          </thead>
          <RecentFile />
          <RecentFile />
          <RecentFile />
          <RecentFile />
          <RecentFile />
          <RecentFile />
          <RecentFile />
          <RecentFile />
          <RecentFile />
          <RecentFile />
        </table>
      </motion.div>
    </section>
  );
};

export default MyFiles;
