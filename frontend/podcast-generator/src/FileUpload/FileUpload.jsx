import React, { useRef, useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

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
    <div>
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
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
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FileUpload;
