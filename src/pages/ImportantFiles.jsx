import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useFiles } from '../context/FileContext';
import { useView } from '../context/ViewContext';
import FileCard from '../components/ui/FileCard';
import FileList from '../components/ui/FileList';
import ViewToggle from '../components/ui/ViewToggle';
import Breadcrumb from '../components/ui/Breadcrumb';

const ImportantFiles = () => {
  const { files } = useFiles();
  const { viewMode } = useView();
  
  const importantFiles = files.filter(file => file.important);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6"
    >
      <div>
        <Breadcrumb path={[{ label: 'Important Files', href: '/important' }]} />
        
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Important Files</h1>
            <p className="text-gray-600">Files you've marked as important</p>
          </motion.div>

          <ViewToggle />
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {importantFiles.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {importantFiles.map((file, index) => (
                <FileCard key={file.id} file={file} index={index} />
              ))}
            </div>
          ) : (
            <FileList files={importantFiles} />
          )
        ) : (
          <div className="text-center py-12">
            <Star size={48} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No important files</h3>
            <p className="text-gray-500">Mark files as important to see them here</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ImportantFiles;