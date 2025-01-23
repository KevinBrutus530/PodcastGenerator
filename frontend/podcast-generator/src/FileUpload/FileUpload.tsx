import React, { useRef, useState } from "react";
import './_fileUpload.css'

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null> (null);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    // Simulate a click on the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type.startsWith("audio/")) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please upload a valid audio file.");
    }
  };

  const handleUpload = () => {
    if (file) {
      console.log("Uploading file:", file);
      // Add your file upload logic here, e.g., sending the file to a server.
    } else {
      alert("No file selected!");
    }
  };

  return (
    <div className="audio-upload-container">
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        id="audio-upload"
      />
      <label htmlFor="audio-upload">
        <button type="button" onClick={handleButtonClick}>
          Upload Audio
        </button>
      </label>
      {file && (
        <>
          <p>Selected file: {file.name}</p>{" "}
          <button type="button" onClick={handleUpload} disabled={!file}>
            Submit
          </button>
        </>
      )}
      {error && <p className="file-error">{error}</p>}
    </div>
  );
};

export default FileUpload;
