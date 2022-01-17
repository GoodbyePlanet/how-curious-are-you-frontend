import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LevelOne from "./pages/LevelOne";

import "./App.css";
import LevelTwo from "./pages/LevelTwo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/level-one" element={<LevelOne />} />
        <Route path="/" element={<LevelTwo />} />
      </Routes>
    </div>
  );
}

export default App;
