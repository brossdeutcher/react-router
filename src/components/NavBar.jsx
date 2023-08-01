import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav id="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/blue">Blue</Link>
        <Link className="nav-link" to="/red">Red</Link>
        <Link className="nav-link" to="/round">Round</Link>
      </nav>
    </>
  );
};

export default NavBar;
