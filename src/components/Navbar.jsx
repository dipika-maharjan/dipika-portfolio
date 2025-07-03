import { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false); //state variable to manage open/close state

    const toggleMenu = () => {
        setIsOpen(!isOpen); //function to toggle menu state
    }

    return(
        <div id='hero'>
            <nav className='navbar' role='navigation'>
                <button className='hamburger' onClick={toggleMenu} aria-label='Toggle menu' aria-expanded={isOpen}>   {/* aria is a special attributes you add to HTML to help people with disabilities use web content better */}
                    <span className='bar'></span>   {/*hamburger icon for mobile view */}
                    <span className='bar'></span>
                    <span className='bar'></span>
                </button>
                <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>   {/* Navigation menu list, 'active' class added if menu open */}
                    <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}