import { Link } from 'react-router-dom'

import Facebook from '../../assets/facebookLogo.png';
import Intagram from '../../assets/facebookLogo.png';
import Linkedin from '../../assets/facebookLogo.png';
import Twiter from '../../assets/facebookLogo.png';

import BrasilLogo from '../../assets/facebookLogo.png';
import USALogo from '../../assets/facebookLogo.png';

import './Footer.css'
export default function Footer(){

    // ASSETS
    return (
        <footer>
            <div className="container">
                <div className="d-flex al-center jc-space-between">
                    <Link to="/"><img src={Facebook} /></Link>
                      <nav>
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
        </footer>
    )
}