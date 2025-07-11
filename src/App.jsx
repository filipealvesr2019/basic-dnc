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
            <About />
          }
        ></Route>

        <Route
          path="/projects"
          element={
            <Projects />
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <Contact />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
