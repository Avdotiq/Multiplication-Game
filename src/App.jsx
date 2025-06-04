import { Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./Pages/Game";
import Main from "./Pages/Main";
import Score from "./Pages/Score";
import Fail from "./Pages/Fail";
import Victory from "./Pages/Victory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/score" element={<Score />} />
      <Route path="/game" element={<Game />} />
      <Route path="/fail" element={<Fail />} />
      <Route path="/victory" element={<Victory />} />
    </Routes>
  );
}

export default App;
