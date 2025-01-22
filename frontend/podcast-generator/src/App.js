import './App.css';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <div>
          <button>Upload Audio</button>
          <button>Enter Transcript</button>
        </div>
        <input type='text'/>
        <button>Generate Podcast Magic!</button>
      </div>
    
    </div>
  );
}

export default App;
