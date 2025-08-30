import React from 'react';
import { motion } from 'framer-motion';
import { Upload as UploadIcon, FolderPlus } from 'lucide-react';
import UploadZone from '../components/ui/UploadZone';
import Breadcrumb from '../components/ui/Breadcrumb';

const Upload = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-8"
    >
      <div>
        <Breadcrumb path={[{ label: 'Upload', href: '/upload' }]} />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Files</h1>
          <p className="text-gray-600">
            Drag and drop your files here or click to browse from your computer.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <UploadZone />
        </motion.div>

        {/* Upload Options */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <UploadIcon size={20} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">File Upload</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Upload individual files or multiple files at once. Supported formats include documents, images, videos, audio, and archives.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Maximum file size: 100 MB</li>
              <li>• Batch upload supported</li>
              <li>• Auto file type detection</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <FolderPlus size={20} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Folder Upload</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Upload entire folders while preserving the folder structure. Perfect for project backups and bulk uploads.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Maintains folder structure</li>
              <li>• Recursive folder upload</li>
              <li>• Progress tracking per file</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Upload;