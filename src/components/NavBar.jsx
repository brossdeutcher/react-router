import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div id="navbar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
