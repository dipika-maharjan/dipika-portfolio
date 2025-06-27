import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar(){
    return(
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

        </nav>
    )
}