import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";
import RoundBoi from "./RoundBoi";

const Content = () => {
  return (
    <>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blue" element={<Blue />}></Route>
          <Route path="/red" element={<Red />}></Route>
          <Route path="/round" element={<RoundBoi />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Content;