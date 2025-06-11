import { Link } from 'react-router-dom'
import Logo from '../../assets/dnc-logo.png'
export default function Header(){

    // ASSETS
    return (
        <header>
            <div className="container">
                <div className="d-flex al-center jc-space-between">
                    <Link to="/"><img src={Logo} /></Link>
                </div>
            </div>
        </header>
    )
}