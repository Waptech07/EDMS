import React from "react";
import { LinearProgress } from "@mui/material";
import {
  Delete,
  FolderCopy,
  Description,
  Image,
  Videocam,
} from "@mui/icons-material";

const StorageUpdate = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-between mx-3 pt-5">
          <div id="used">
            <h1 className="font-semibold text-lg text-blue-500">45.5GB</h1>
            <p className="text-base font-medium text-black">Used</p>
          </div>
          <div id="current">
            <h1 className="font-semibold text-lg text-gray-500">50.0GB</h1>
            <p className="text-base font-medium text-black">Upgrade</p>
          </div>
        </div>
        <div className="w-full px-3 pt-2 rounded-full">
          <LinearProgress
            variant="determinate"
            value={(45.5 / 50) * 100} // Assuming 50GB total
          />
        </div>
        <div className="flex flex-col p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image color="primary" />
              <div>
                <h1 className="text-base font-semibold capitalize">Images</h1>
                <p className="text-sm">1434 files</p>
              </div>
            </div>
            <p className="text-base font-semibold capitalize">15.3 GB</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Description color="success" />
              <div>
                <h1 className="text-base font-semibold capitalize">
                  Documents
                </h1>
                <p className="text-sm">245 files</p>
              </div>
            </div>
            <p className="text-base font-semibold capitalize">256 MB</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Videocam color="error" />
              <div>
                <h1 className="text-base font-semibold capitalize">Videos</h1>
                <p className="text-sm">34 files</p>
              </div>
            </div>
            <p className="text-base font-semibold capitalize">3.4 GB</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FolderCopy color="warning" />
              <div>
                <h1 className="text-base font-semibold capitalize">
                  Other Files
                </h1>
                <p className="text-sm">10 files</p>
              </div>
            </div>
            <p className="text-base font-semibold capitalize">3 GB</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Delete color="info" />
              <div>
                <h1 className="text-base font-semibold capitalize">Trash</h1>
                <p className="text-sm">52 files</p>
              </div>
            </div>
            <p className="text-base font-semibold capitalize">5 GB</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StorageUpdate;
