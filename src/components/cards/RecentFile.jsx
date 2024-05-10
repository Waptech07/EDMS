import React from "react";

const RecentFile = ({ recentFile }) => {
  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200">
        {/* {recentFiles.map((file) => ( */}
        <tr key={1}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">Name</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">10-02-2022</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">100KB</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">3</div>
          </td>
        </tr>
        {/* ))} */}
      </tbody>
    </>
  );
};

export default RecentFile;
