import { Link } from "react-router-dom";

import Facebook from "../../assets/facebookLogo.png";
import Intagram from "../../assets/instagramLogo.png";
import Linkedin from "../../assets/linkdinLogo.png";
import Twiter from "../../assets/XLogo.png";

import BrasilLogo from "../../assets/facebookLogo.png";
import USALogo from "../../assets/facebookLogo.png";
import Logo from "../../assets/dnc-logo.png";

import "./Footer.css";
export default function Footer() {
  // ASSETS
  return (
    <footer>
      <div className="container">
        <div className="d-flex jc-space-between">
          <div className="footer-logo-col">
            <img src={Logo} alt="" />
            <p className="gray-1-color">
              A escola que prepara você para as profissões em alta no mercado de
              trabalho.
            </p>
            <div className="d-flex social-links">
              <a href="https://google.com" target="_blank">
                <img src={Facebook} />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={Twiter} />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={Linkedin} />
              </a>
              <a href="https://google.com" target="_blank">
                <img src={Intagram} />
              </a>
            </div>
         
          </div>
            
        </div>
             <div className="d-flex">
              <div className="footer-col">
                <h3>Pages</h3>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex jc-space-beteween footer-copy">
              <p className="gray-1-color">
                Copyright © DNC - 2024
              </p>
               </div>
      </div>
    </footer>
  );
}
