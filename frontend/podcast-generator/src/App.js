import "./App.css";
import FileUpload from "./FileUpload/FileUpload.tsx";
import Header from "./header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <div>
          <FileUpload />
          <button>Enter Transcript</button>
        </div>
        <input type="text" />
        <button>Generate Podcast Magic!</button>
      </div>
    </div>
  );
}

export default App;
