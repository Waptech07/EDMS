import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, RotateCcw, X } from 'lucide-react';
import { useFiles } from '../context/FileContext';
import Breadcrumb from '../components/ui/Breadcrumb';

const Trash = () => {
  const { trashedFiles, restoreFromTrash } = useFiles();

  const handleRestore = (fileId) => {
    restoreFromTrash(fileId);
  };

  const handlePermanentDelete = (fileId) => {
    console.log('Permanently delete:', fileId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6"
    >
      <div>
        <Breadcrumb path={[{ label: 'Trash', href: '/trash' }]} />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Trash</h1>
          <p className="text-gray-600">
            Files in trash will be permanently deleted after 30 days
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {trashedFiles.length > 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
              <div className="col-span-6">Name</div>
              <div className="col-span-2">Size</div>
              <div className="col-span-2">Deleted</div>
              <div className="col-span-2">Actions</div>
            </div>
            
            <div className="divide-y divide-gray-100">
              {trashedFiles.map((file, index) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
                >
                  <div className="col-span-6 flex items-center gap-3">
                    <div className="text-gray-400">
                      <Trash2 size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-700 truncate">
                        {file.name}
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-span-2 flex items-center">
                    <span className="text-sm text-gray-500">{file.size}</span>
                  </div>
                  
                  <div className="col-span-2 flex items-center">
                    <span className="text-sm text-gray-500">
                      {new Date(file.trashedAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="col-span-2 flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleRestore(file.id)}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-green-700 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                    >
                      <RotateCcw size={12} />
                      Restore
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePermanentDelete(file.id)}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                    >
                      <X size={12} />
                      Delete
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Trash2 size={48} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Trash is empty</h3>
            <p className="text-gray-500">Deleted files will appear here</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Trash;