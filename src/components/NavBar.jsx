import { Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav id="navbar">
        <Routes>
          <Route path="*" element={<Link className="nav-link" to="/">Home</Link>}></Route>
          <Route path="/colors" element={
            <>
              <Link className="nav-link" to="/colors/blue">Blue</Link>
              <Link className="nav-link" to="/colors/red">Red</Link>
            </>
          }></Route>
          <Route path="/shapes" element={
            <>
              <Link className="nav-link" to="/shapes/round">Round</Link>
              <Link className="nav-link" to="/shapes/triangle">Triangle</Link>
            </>
          }></Route>
        </Routes>
      </nav>
    </>
  );
};

export default NavBar;
