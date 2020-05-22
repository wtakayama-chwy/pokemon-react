import React from 'react'
import { Link } from 'react-router-dom'

import pokemonLogo from '../../assets/Header/pokemon-logo.png'
import githubIcon from '../../assets/Header/github-icon.svg'
import linkedinIcon from '../../assets/Header/linkedin-icon.svg'

const Header = () => {
    return ( 
        <header>
            <div className="header-wrapper fixed">
                <div className="logo-container">
                    <Link to="/">
                        <img src={pokemonLogo} alt="Pokebola" className="pokemon-logo"/>
                    </Link>
                </div>                
                <nav className="menu">
                    <div className="menu-user">
                        <ul className="menu-list">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/williamstakayama/" className="item-link">                            
                                <li className="navigation-item">
                                    <img src={linkedinIcon} alt="Linkedin icon" className="item-icon"/>Will S. Takayama
                                </li>
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/william-takayama/pokemon-react" className="item-link">
                                <li className="navigation-item">
                                    <img src={githubIcon} alt="Github icon" className="item-icon"/>Github
                                </li>                            
                            </a>
                        </ul>
                    </div>
                </nav>

            </div>
        </header>
    );
}

export default Header;