import "./App.css";
import EnterTranscript from "./components/RenameTranscript/EnterTranscript.tsx";
import FileUpload from "./components/FileUpload/FileUpload.tsx";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <div>
          <FileUpload />
          <EnterTranscript/> 
        </div>
        <button>Generate Podcast Magic!</button>
      </div>
    </div>
  );
}

export default App;
