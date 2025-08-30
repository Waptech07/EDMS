import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Image, Video, Headphones, Archive } from 'lucide-react';
import { useFiles } from '../context/FileContext';
import { useView } from '../context/ViewContext';
import FileCard from '../components/ui/FileCard';
import FileList from '../components/ui/FileList';
import ViewToggle from '../components/ui/ViewToggle';
import Breadcrumb from '../components/ui/Breadcrumb';

const FilesByType = () => {
  const { type } = useParams();
  const { files } = useFiles();
  const { viewMode } = useView();

  const typeConfig = {
    documents: {
      icon: FileText,
      label: 'Documents',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    images: {
      icon: Image,
      label: 'Images',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    videos: {
      icon: Video,
      label: 'Videos',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    audios: {
      icon: Headphones,
      label: 'Audio Files',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    archives: {
      icon: Archive,
      label: 'Archives',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  };

  const config = typeConfig[type] || typeConfig.documents;
  const Icon = config.icon;
  
  const filteredFiles = files.filter(file => file.category === type);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6"
    >
      <div>
        <Breadcrumb path={[
          { label: 'Files', href: '/files' },
          { label: config.label, href: `/files/${type}` }
        ]} />
        
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <div className={`p-3 rounded-lg ${config.bgColor}`}>
              <Icon size={32} className={config.color} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">{config.label}</h1>
              <p className="text-gray-600">{filteredFiles.length} files</p>
            </div>
          </motion.div>

          <ViewToggle />
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {filteredFiles.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredFiles.map((file, index) => (
                <FileCard key={file.id} file={file} index={index} />
              ))}
            </div>
          ) : (
            <FileList files={filteredFiles} />
          )
        ) : (
          <div className="text-center py-12">
            <Icon size={48} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No {config.label.toLowerCase()} found</h3>
            <p className="text-gray-500">Upload some {config.label.toLowerCase()} to see them here</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default FilesByType;