import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LevelOne from "./pages/LevelOne";
import LevelTwo from "./pages/LevelTwo";
import LevelThree from "./pages/LevelThree";
import LevelFour from "./pages/LevelFour";
import LevelFive from "./pages/LevelFive";
import LevelSix from "./pages/LevelSix";
import LevelSeven from "./pages/LevelSeven";
import LevelEight from "./pages/LevelEight";
import LevelNine from "./pages/LevelNine";
import End from "./pages/End";
import HallOfFame from "./pages/HallOfFame";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/level-one" element={<LevelOne />} />
        <Route path="/level-two" element={<LevelTwo />} />
        <Route path="/level-three" element={<LevelThree />} />
        <Route path="/level-four" element={<LevelFour />} />
        <Route path="/level-five" element={<LevelFive />} />
        <Route path="/level-six" element={<LevelSix />} />
        <Route path="/level-seven" element={<LevelSeven />} />
        <Route path="/level-eight" element={<LevelEight />} />
        <Route path="/level-nine" element={<LevelNine />} />
        <Route path="/end" element={<End />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
      </Routes>
    </div>
  );
}

export default App;
