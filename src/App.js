import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import UploadForm from './pages/upload/upload';
import MyFiles from './pages/files/MyFiles';
import Sidebar from './components/sidebar/sidebar';
import ListFiles from './pages/files/ListFiles';
import Documents from './pages/files/Documents';
import Images from './pages/files/Images';
import Videos from './pages/files/Videos';
import Audios from './pages/files/Audios';
import ZipFiles from './pages/files/ZipFiles';
import Trash from './pages/files/Trash';
import ListFolders from './pages/files/ListFolders';
import ImportantFiles from './pages/files/ImportantFiles';
import RecentFiles from './pages/files/RecentFiles';
import Admin from './admin/admin';

function App() {
  // State to store uploaded files
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [admin, setAdmin] = useState(false);

  // setAdmin(true);
  // Function to handle file upload and update state
  const handleFileUpload = (files) => {
    setUploadedFiles(files);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      {/* {
        admin ? ( */}
          <Router>
            <Routes>
              {/* Pass uploadedFiles state as prop to MyFiles */}
              <Route path="/" element={<MyFiles files={uploadedFiles} />} />
              <Route path="/files" element={<ListFiles />} />
              <Route path="/folders" element={<ListFolders />} />
              <Route path="/recent-files" element={<RecentFiles />} />
              <Route path="/important-files" element={<ImportantFiles />} />
              <Route path="/trash" element={<Trash />} />
              <Route path="/files/docs" element={<Documents />} />
              <Route path="/files/images" element={<Images />} />
              <Route path="/files/videos" element={<Videos />} />
              <Route path="/files/audios" element={<Audios />} />
              <Route path="/files/zip" element={<ZipFiles />} />
              {/* Pass handleFileUpload function as prop to UploadForm */}
              <Route path="/upload" element={<UploadForm onFileUpload={handleFileUpload} />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Router>
        {/* // ) : (
        //   <Router>
        //     <Routes>
        //       <Route path="/admin" element={<Admin />} />
        //     </Routes>
        //   </Router>
      // )}*/}
    </>
  );
}

export default App;
