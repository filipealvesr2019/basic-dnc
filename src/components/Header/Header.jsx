import { Link } from 'react-router-dom'
import Logo from '../../assets/dnc-logo.png'
import './Header.css'
export default function Header(){

    // ASSETS
    return (
        <header>
            <div className="container">
                <div className="d-flex al-center jc-space-between">
                    <Link to="/"><img src={Logo} /></Link>
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
        </header>
    )
}