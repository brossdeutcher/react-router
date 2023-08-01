import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="container">
        <NavBar />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
