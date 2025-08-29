import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Image, 
  Video, 
  Headphones, 
  Archive, 
  File,
  Star,
  MoreVertical,
  Download,
  Trash2,
  Share2,
  Eye
} from 'lucide-react';
import { useFiles } from '../../context/FileContext';

const FileList = ({ files }) => {
  const { toggleImportant, moveToTrash } = useFiles();

  const getFileIcon = (type) => {
    const iconProps = { size: 20 };
    
    switch (type) {
      case 'pdf':
      case 'doc':
      case 'docx':
      case 'txt':
        return <FileText {...iconProps} className="text-blue-600" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'image':
        return <Image {...iconProps} className="text-green-600" />;
      case 'mp4':
      case 'avi':
      case 'mov':
      case 'video':
        return <Video {...iconProps} className="text-red-600" />;
      case 'mp3':
      case 'wav':
      case 'audio':
        return <Headphones {...iconProps} className="text-purple-600" />;
      case 'zip':
      case 'rar':
      case '7z':
        return <Archive {...iconProps} className="text-orange-600" />;
      default:
        return <File {...iconProps} className="text-gray-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
        <div className="col-span-6">Name</div>
        <div className="col-span-2">Size</div>
        <div className="col-span-2">Modified</div>
        <div className="col-span-2">Actions</div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {files.map((file, index) => (
          <motion.div
            key={file.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
            className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors duration-150 group"
          >
            <div className="col-span-6 flex items-center gap-3">
              {getFileIcon(file.type)}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                  {file.name}
                </p>
              </div>
              {file.important && (
                <Star size={14} className="text-yellow-500 fill-current flex-shrink-0" />
              )}
            </div>
            
            <div className="col-span-2 flex items-center">
              <span className="text-sm text-gray-500">{file.size}</span>
            </div>
            
            <div className="col-span-2 flex items-center">
              <span className="text-sm text-gray-500">{file.modified}</span>
            </div>
            
            <div className="col-span-2 flex items-center gap-1">
              <button
                onClick={() => toggleImportant(file.id)}
                className="p-1.5 hover:bg-gray-200 rounded transition-colors"
                title={file.important ? 'Remove from Important' : 'Mark as Important'}
              >
                <Star size={14} className={file.important ? 'text-yellow-500 fill-current' : 'text-gray-400'} />
              </button>
              
              <button
                onClick={() => console.log('Download:', file.name)}
                className="p-1.5 hover:bg-gray-200 rounded transition-colors"
                title="Download"
              >
                <Download size={14} className="text-gray-400" />
              </button>
              
              <button
                onClick={() => moveToTrash(file.id)}
                className="p-1.5 hover:bg-red-100 rounded transition-colors"
                title="Move to Trash"
              >
                <Trash2 size={14} className="text-gray-400 hover:text-red-600" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FileList;