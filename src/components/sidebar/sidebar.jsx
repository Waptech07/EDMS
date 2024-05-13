import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  Add,
  Folder,
  Devices,
  Update,
  Stars,
  Delete,
  FolderCopy,
  ExpandCircleDown,
  Description,
  Image,
  Videocam,
  Headset,
  FolderZip,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import StorageUpdate from "./storage";

const Sidebar = () => {
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);

  const toggleDocumentsDropdown = () => {
    setIsDocumentsOpen(!isDocumentsOpen);
  };

  return (
    <>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="lg:fixed left-0 top-0 h-[80%] lg:w-1/4 bg-white text-gray-800 p-4 z-10 lg:my-28 mt-28 mb-10 mx-5 shadow-md rounded-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Button
            variant="contained"
            color="info"
            href="/upload"
            className="w-full flex gap-2 items-center justify-center font-bold"
          >
            <Add fontSize="" />
            Add File
          </Button>
        </motion.div>
        <h2 className="text-xl font-semibold py-2">EDMS</h2>
        <ul className="space-y-1">
          <li className="px-3 font-medium text-base capitalize">
            <a href="/" className="flex gap-2 items-center hover:text-black">
              <Folder />
              All Files
            </a>
          </li>
          <hr />
          <li className="px-3 font-medium text-base capitalize">
            <a
              href="/files"
              className="flex gap-2 items-center hover:text-black"
            >
              <Devices />
              My Devices
            </a>
          </li>
          <hr />
          <li className="px-3 font-medium text-base capitalize">
            <a
              href="/recent-files"
              className="flex gap-2 items-center hover:text-black"
            >
              <Update />
              Recents
            </a>
          </li>
          <hr />
          <li className="px-3 font-medium text-base capitalize">
            <a
              href="/important-files"
              className="flex gap-2 items-center hover:text-black"
            >
              <Stars />
              Important
            </a>
          </li>
          <hr />
          <li className="px-3 font-medium text-base capitalize">
            <a
              href="/trash"
              className="flex gap-2 items-center hover:text-black"
            >
              <Delete />
              Trash
            </a>
          </li>
          <hr />
          <li className="px-3 font-medium text-base capitalize">
            <div
              className="flex justify-between items-center cursor-pointer relative"
              onClick={toggleDocumentsDropdown}
            >
              <span className="flex gap-2 items-center">
                <FolderCopy />
                Files
              </span>
              <ExpandCircleDown
                className={`transform transition-transform duration-1000 ${
                  isDocumentsOpen ? "rotate-180" : "rotate-0"
                }`}
                onClick={toggleDocumentsDropdown}
              />
            </div>
            {isDocumentsOpen && (
              <motion.ul
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-3 rounded-lg shadow-xl bg-white space-y-2 fixed left-72"
              >
                <li>
                  <a
                    href="/files/docs"
                    className="text-base hover:text-black hover:shadow-md rounded-lg px-2 gap-2 flex items-center justify-stretch"
                  >
                    <Description />
                    Documents
                  </a>
                </li>
                <li>
                  <a
                    href="/files/images"
                    className="text-base hover:text-black hover:shadow-md rounded-lg px-2 gap-2 flex items-center justify-stretch"
                  >
                    <Image />
                    Images
                  </a>
                </li>
                <li>
                  <a
                    href="/files/videos"
                    className="text-base hover:text-black hover:shadow-md rounded-lg px-2 gap-2 flex items-center justify-stretch"
                  >
                    <Videocam />
                    Videos
                  </a>
                </li>
                <li>
                  <a
                    href="/files/audios"
                    className="text-base hover:text-black hover:shadow-md rounded-lg px-2 gap-2 flex items-center justify-stretch"
                  >
                    <Headset />
                    Audios
                  </a>
                </li>
                <li>
                  <a
                    href="/files/zip"
                    className="text-base hover:text-black hover:shadow-md rounded-lg px-2 gap-2 flex items-center justify-stretch"
                  >
                    <FolderZip />
                    Zip Files
                  </a>
                </li>
                {/* Add more dropdown items as needed */}
              </motion.ul>
            )}
          </li>
          {/* Add more sidebar items as needed */}
        </ul>
        <div className="bg-gray-200 h-[45%] my-5 rounded-md overflow-y-auto">
          <StorageUpdate />
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
