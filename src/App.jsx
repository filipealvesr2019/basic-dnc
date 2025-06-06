import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Pages
import Home from './pages/Home';
import About from './pages/About'
import Projects from "./pages/Projects";
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        ></Route>

        <Route
          path="/about"
          element={
            <>
              <h1>ABOUT</h1>
            </>
          }
        ></Route>

        <Route
          path="/projects"
          element={
            <>
              <h1>PROJECTS</h1>
            </>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <>
              <h1>CONTACT</h1>
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
