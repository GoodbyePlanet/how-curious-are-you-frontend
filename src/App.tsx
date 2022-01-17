import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LevelOne from "./pages/LevelOne";
import LevelTwo from "./pages/LevelTwo";

import "./App.css";

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
