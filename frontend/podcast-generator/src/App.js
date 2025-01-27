import "./App.css";
import EnterTranscript from "./components/EnterTranscript/EnterTranscript.tsx";
import FileUpload from "./components/FileUpload/FileUpload.tsx";
import Header from "./components/Header/Header.jsx";
import React, { useState } from "react";

function App() {
  const [podcastText, setPodcastText] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGeneratePodcast = async () => {
    setLoading(true);
    try {
      // Simulate an AI conversion process (replace with actual API integration)
      const fakePodcastText =
        "Welcome to our AI-generated podcast! Here's a brief overview of the transcript.";
      const fakeAudioURL = "https://example.com/podcast-audio.mp3"; // Replace with actual audio file URL

      // Simulate a delay for demonstration
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setPodcastText(fakePodcastText);
      setAudioURL(fakeAudioURL);
    } catch (error) {
      console.error("Error generating podcast:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header />

      {/* File Upload Component */}
      <FileUpload />

      {/* Enter Transcript Component */}
      <EnterTranscript />

      {/* Generate Podcast Button */}
      <button
        type="button"
        onClick={handleGeneratePodcast}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        disabled={loading}
      >
        {loading ? "Generating Podcast..." : "Generate Podcast"}
      </button>

      {/* Display Podcast Text */}
      {podcastText && (
        <div style={{ marginTop: "20px" }}>
          <h2>Generated Podcast</h2>
          <p>{podcastText}</p>
        </div>
      )}

      {/* Display Podcast Audio Player */}
      {audioURL && (
        <div style={{ marginTop: "10px" }}>
          <audio controls>
            <source src={audioURL} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}

export default App;
