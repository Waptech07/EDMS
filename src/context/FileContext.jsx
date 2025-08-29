import React, { createContext, useContext, useState, useEffect } from 'react';

const FileContext = createContext();

export const useFiles = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('useFiles must be used within a FileProvider');
  }
  return context;
};

export const FileProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [recentFiles, setRecentFiles] = useState([]);
  const [importantFiles, setImportantFiles] = useState([]);
  const [trashedFiles, setTrashedFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Mock data for demonstration
  useEffect(() => {
    const mockFiles = [
      {
        id: 1,
        name: 'Project Proposal.pdf',
        type: 'pdf',
        size: '2.4 MB',
        modified: '2024-01-15',
        important: true,
        category: 'documents'
      },
      {
        id: 2,
        name: 'Team Photo.jpg',
        type: 'image',
        size: '5.2 MB',
        modified: '2024-01-14',
        important: false,
        category: 'images'
      },
      {
        id: 3,
        name: 'Presentation.mp4',
        type: 'video',
        size: '45.8 MB',
        modified: '2024-01-13',
        important: true,
        category: 'videos'
      },
      {
        id: 4,
        name: 'Meeting Recording.mp3',
        type: 'audio',
        size: '12.1 MB',
        modified: '2024-01-12',
        important: false,
        category: 'audios'
      },
      {
        id: 5,
        name: 'Archive.zip',
        type: 'zip',
        size: '89.3 MB',
        modified: '2024-01-11',
        important: false,
        category: 'archives'
      }
    ];

    const mockFolders = [
      {
        id: 1,
        name: 'Projects',
        fileCount: 24,
        modified: '2024-01-15'
      },
      {
        id: 2,
        name: 'Documents',
        fileCount: 156,
        modified: '2024-01-14'
      },
      {
        id: 3,
        name: 'Media',
        fileCount: 89,
        modified: '2024-01-13'
      }
    ];

    setFiles(mockFiles);
    setFolders(mockFolders);
    setRecentFiles(mockFiles.slice(0, 3));
    setImportantFiles(mockFiles.filter(file => file.important));
  }, []);

  const addFiles = (newFiles) => {
    const processedFiles = newFiles.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      type: file.type.split('/')[1] || 'unknown',
      size: formatFileSize(file.size),
      modified: new Date().toISOString().split('T')[0],
      important: false,
      category: getCategoryFromType(file.type)
    }));
    
    setFiles(prev => [...processedFiles, ...prev]);
    setRecentFiles(prev => [...processedFiles.slice(0, 3), ...prev.slice(0, 7)]);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getCategoryFromType = (type) => {
    if (type.startsWith('image/')) return 'images';
    if (type.startsWith('video/')) return 'videos';
    if (type.startsWith('audio/')) return 'audios';
    if (type.includes('zip') || type.includes('rar')) return 'archives';
    return 'documents';
  };

  const toggleImportant = (fileId) => {
    setFiles(prev => prev.map(file => 
      file.id === fileId ? { ...file, important: !file.important } : file
    ));
  };

  const moveToTrash = (fileId) => {
    const fileToTrash = files.find(file => file.id === fileId);
    if (fileToTrash) {
      setTrashedFiles(prev => [...prev, { ...fileToTrash, trashedAt: new Date().toISOString() }]);
      setFiles(prev => prev.filter(file => file.id !== fileId));
    }
  };

  const restoreFromTrash = (fileId) => {
    const fileToRestore = trashedFiles.find(file => file.id === fileId);
    if (fileToRestore) {
      const { trashedAt, ...restoredFile } = fileToRestore;
      setFiles(prev => [...prev, restoredFile]);
      setTrashedFiles(prev => prev.filter(file => file.id !== fileId));
    }
  };

  const value = {
    files,
    folders,
    recentFiles,
    importantFiles,
    trashedFiles,
    searchQuery,
    selectedFiles,
    setSearchQuery,
    setSelectedFiles,
    addFiles,
    toggleImportant,
    moveToTrash,
    restoreFromTrash
  };

  return (
    <FileContext.Provider value={value}>
      {children}
    </FileContext.Provider>
  );
};