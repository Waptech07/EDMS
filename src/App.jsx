import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import AllFiles from './pages/AllFiles';
import RecentFiles from './pages/RecentFiles';
import ImportantFiles from './pages/ImportantFiles';
import Trash from './pages/Trash';
import Upload from './pages/Upload';
import FilesByType from './pages/FilesByType';
import { FileProvider } from './context/FileContext';
import { ViewProvider } from './context/ViewContext';

function App() {
  return (
    <FileProvider>
      <ViewProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 ml-64 pt-16">
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/files" element={<AllFiles />} />
                    <Route path="/recent" element={<RecentFiles />} />
                    <Route path="/important" element={<ImportantFiles />} />
                    <Route path="/trash" element={<Trash />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/files/:type" element={<FilesByType />} />
                  </Routes>
                </AnimatePresence>
              </main>
            </div>
          </div>
        </Router>
      </ViewProvider>
    </FileProvider>
  );
}

export default App;