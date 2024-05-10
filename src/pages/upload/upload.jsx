import React, { useState } from "react";
import { Stack, Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import HomeBgImg from "../../assets/homeBg.jpg";

const UploadForm = () => {
  const [formData, setFormData] = useState({
    fileName: "",
    description: "",
    files: [], // Store the selected files/folders
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (files) => {
    console.log("Files selected:", files); // Add this line to check if files are received
    setFormData((prevFormData) => ({
      ...prevFormData,
      files: files,
    }));
  };    

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration, log the list of files to be uploaded
    console.log("Files to be uploaded:", formData.files);
    // Reset form after submission
    setFormData({
      fileName: "",
      description: "",
      files: [],
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleFileChange,
    multiple: true, // Allow multiple files and folders to be dropped
  });

  return (
    <section
      className="bg-contain"
      style={{ backgroundImage: `url(${HomeBgImg})` }}
    >
      <div className="backdrop-blur-sm backdrop-brightness-50 min-h-screen flex justify-center items-center">
        <motion.form
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-white p-5 rounded-lg shadow-md m-20"
        >
          <h2 className="text-2xl font-semibold mb-4">Upload File/Folder</h2>
          <Stack spacing={3}>
            <TextField
              required
              label="File Name"
              variant="outlined"
              name="fileName"
              value={formData.fileName}
              onChange={handleChange}
            />
            <TextField
              label="Description"
              variant="outlined"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <div {...getRootProps()} className="dropzone">
              {/* <input {...getInputProps()} directory="" webkitdirectory="" type="file" /> */}
              <p className="p-10 border border-slate-900">
                Drag 'n' drop some files here, or click to select files
              </p>
            </div>
            {/* Display uploaded files */}
            <div>
              <ul className="grid grid-cols-2 gap-2">
                {formData.files.map((file, index) => (
                  <li
                    key={index}
                    className="bg-grey shadow-lg text-sm p-2 rounded-md col-span-3"
                  >
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
            <Button type="submit" variant="contained" color="primary">
              Upload
            </Button>
          </Stack>
        </motion.form>
      </div>
    </section>
  );
};

export default UploadForm;
