import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";
import RoundBoi from "./RoundBoi";
import TriBoi from "./TriBoi";

const Content = () => {
  return (
    <>
      <div id="main-section">
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/colors/blue" element={<Blue />}></Route>
          <Route path="/colors/red" element={<Red />}></Route>
          <Route path="/shapes/round" element={<RoundBoi />}></Route>
          <Route path="/shapes/triangle" element={<TriBoi />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Content;