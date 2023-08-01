import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"
import "./App.css";
import Blue from "./components/Blue";
import Red from "./components/Red";

function App() {
  return (
    <>
      <div id="container"><h1>Hello</h1>
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />}></Route>
            <Route path="/red"  element={<Red />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
