import { Link } from 'react-router-dom'

import Facebook from '../../assets/facebookLogo.png';
import Intagram from '../../assets/facebookLogo.png';
import Linkedin from '../../assets/facebookLogo.png';
import Twiter from '../../assets/facebookLogo.png';

import BrasilLogo from '../../assets/facebookLogo.png';
import USALogo from '../../assets/facebookLogo.png';
import Logo from '../../assets/dnc-logo.png'

import './Footer.css'
export default function Footer(){

    // ASSETS
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between">
                    <div className='footer-logo-col'>
                 <img src={Logo} alt="" />
                 <p className='gray-1-color'>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>

                    </div>
           
                </div>
              
            </div>
        </footer>
    )
}