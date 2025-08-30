import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import * as XLSX from "xlsx";
import FileViewer from "react-file-viewer";

const FileViewerDialog = ({ file, open, onClose }) => {
  const renderFileContent = () => {
    switch (file.type) {
      case "pdf":
        return (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={file.url} />
          </Worker>
        );
      case "excel":
        return <ExcelViewer fileUrl={file.url} />;
      case "word":
        return (
          <FileViewer
            fileType='docx'
            filePath={file.url}
          />
        );
      default:
        return <p>Cannot display this file type</p>;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{file.name}</DialogTitle>
      <DialogContent>{renderFileContent()}</DialogContent>
    </Dialog>
  );
};

const ExcelViewer = ({ fileUrl }) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fileUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        setData(jsonData);
      } catch (err) {
        setError("Error reading Excel file");
      }
    };

    fetchData();
  }, [fileUrl]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <table>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

FileViewerDialog.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    dateModified: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FileViewerDialog;

export const files = [
  {
    id: 1,
    name: "Project Plan",
    type: "pdf",
    url: "/assets/project_plan.pdf",
    dateModified: "12-03-2023",
    size: "1.2MB",
  },
  {
    id: 2,
    name: "Budget Report",
    type: "excel",
    url: "/assets/budget_report.xlsx", // Ensure the file is .xlsx
    dateModified: "15-04-2023",
    size: "2.5MB",
  },
  {
    id: 3,
    name: "Meeting Notes",
    type: "word",
    url: "/assets/meeting_notes.docx",
    dateModified: "20-05-2023",
    size: "600KB",
  },
  // Add more dummy files as needed
];
