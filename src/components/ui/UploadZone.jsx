import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X, CheckCircle } from 'lucide-react';
import { useFiles } from '../../context/FileContext';

const UploadZone = () => {
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { addFiles } = useFiles();

  const onDrop = (acceptedFiles) => {
    // Simulate upload progress
    acceptedFiles.forEach((file, index) => {
      const fileId = `${file.name}-${Date.now()}-${index}`;
      
      setUploadProgress(prev => ({
        ...prev,
        [fileId]: 0
      }));

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          const currentProgress = prev[fileId] || 0;
          if (currentProgress >= 100) {
            clearInterval(interval);
            setUploadedFiles(prevUploaded => [...prevUploaded, { ...file, id: fileId }]);
            return prev;
          }
          return {
            ...prev,
            [fileId]: Math.min(currentProgress + Math.random() * 30, 100)
          };
        });
      }, 200);
    });

    // Add files to context after upload simulation
    setTimeout(() => {
      addFiles(acceptedFiles);
    }, 2000);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true
  });

  const removeUploadedFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
  };

  return (
    <div className="space-y-6">
      <motion.div
        {...getRootProps()}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`relative border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all duration-300 ${
          isDragActive
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        
        <motion.div
          animate={{ 
            y: isDragActive ? -5 : 0,
            scale: isDragActive ? 1.05 : 1 
          }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${
            isDragActive ? 'bg-blue-100' : 'bg-gray-100'
          }`}>
            <Upload size={32} className={isDragActive ? 'text-blue-600' : 'text-gray-600'} />
          </div>
          
          <div>
            <p className="text-lg font-medium text-gray-900 mb-2">
              {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
            </p>
            <p className="text-gray-500">
              or <span className="text-blue-600 font-medium">browse files</span> from your computer
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Upload Progress */}
      <AnimatePresence>
        {Object.keys(uploadProgress).length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3"
          >
            <h3 className="font-medium text-gray-900">Uploading Files</h3>
            {Object.entries(uploadProgress).map(([fileId, progress]) => {
              const file = uploadedFiles.find(f => f.id === fileId) || 
                          { name: fileId.split('-')[0], size: 0 };
              
              return (
                <motion.div
                  key={fileId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200"
                >
                  <File size={20} className="text-gray-600 flex-shrink-0" />
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          className="bg-blue-600 h-1.5 rounded-full"
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-12 text-right">
                        {Math.round(progress)}%
                      </span>
                    </div>
                  </div>

                  {progress >= 100 ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <CheckCircle size={20} className="text-green-600" />
                    </motion.div>
                  ) : (
                    <button
                      onClick={() => removeUploadedFile(fileId)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <X size={16} className="text-gray-400" />
                    </button>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UploadZone;