import "./App.css";
import PageStructure from "./components/PageStructure.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PageStructure />
    </div>
  );
}

export default App;
