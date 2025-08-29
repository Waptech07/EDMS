import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useFiles } from '../context/FileContext';
import { useView } from '../context/ViewContext';
import FileCard from '../components/ui/FileCard';
import FileList from '../components/ui/FileList';
import ViewToggle from '../components/ui/ViewToggle';
import Breadcrumb from '../components/ui/Breadcrumb';

const RecentFiles = () => {
  const { recentFiles } = useFiles();
  const { viewMode } = useView();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6"
    >
      <div>
        <Breadcrumb path={[{ label: 'Recent Files', href: '/recent' }]} />
        
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Recent Files</h1>
            <p className="text-gray-600">Files you've accessed recently</p>
          </motion.div>

          <ViewToggle />
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {recentFiles.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {recentFiles.map((file, index) => (
                <FileCard key={file.id} file={file} index={index} />
              ))}
            </div>
          ) : (
            <FileList files={recentFiles} />
          )
        ) : (
          <div className="text-center py-12">
            <Clock size={48} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No recent files</h3>
            <p className="text-gray-500">Files you access will appear here</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default RecentFiles;