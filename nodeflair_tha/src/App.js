import './App.css';
import LeftContainer from './components/left/LeftContainer';
import RightContainer from './components/right/RightContainer';
// import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {

  
  return (
    <div className="App">
      <div className="container">
          <LeftContainer />
          <RightContainer />
      </div>
    </div>
  );
}

export default App;
