import React, { useState } from "react";

const EnterTranscript: React.FC = () => {
  const [showTextarea, setShowTextarea] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>("");

  const handleButtonClick = () => {
    setShowTextarea((prev) => !prev); // Toggle the display of the textarea
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTranscript(e.target.value); // Update the transcript state with the text input
  };

  return (
    <div>
      {/* Button to toggle the textarea */}
      <button type="button" onClick={handleButtonClick}>
        {showTextarea ? "Hide Transcript" : "Enter Transcript"}
      </button>

      {/* Display textarea if showTextarea is true */}
      {showTextarea && (
        <textarea
          value={transcript}
          onChange={handleTextareaChange}
          rows={5}
          cols={40}
          placeholder="Enter your transcript here..."
          style={{
            display: "block",
            marginTop: "10px",
            padding: "10px",
            fontSize: "1rem",
          }}
        />
      )}
    </div>
  );
};

export default EnterTranscript;
