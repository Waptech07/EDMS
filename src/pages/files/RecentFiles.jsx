import React from "react";
import { motion } from "framer-motion";
import RecentFile from "../../components/cards/RecentFile";
import SearchBar from "../../components/search/SearchBar";

const RecentFiles = () => {
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
            <SearchBar size={"small"} placeholder={"Search Recent Files..."} />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Recent Files</h2>
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
    </>
  );
};

export default RecentFiles;
