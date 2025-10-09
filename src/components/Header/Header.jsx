import { Link } from "react-router-dom";
import Logo from "../../assets/dnc-logo.png";
import "./Header.css";
import Button from "../Button/Button";
import { useState } from "react";
// COMPONENTS

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // ASSETS
  return (
    <header>
      <div className="container">
        <div className="d-flex al-center jc-space-between">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <div className="mobile-menu">
            <Button
              buttonStyle={"secondary"}
              onClick={() => setIsOpen(!isOpen)}
            >
              Menu
            </Button>
          </div>
          <nav className={`${isOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
