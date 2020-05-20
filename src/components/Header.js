import React from 'react';
import { Link } from 'react-router-dom';

import pokebola from '../assets/Header/pokebola.png';
import pokemonLogo from '../assets/Header/pokemon-logo.png';

import '../styles/scss/header.scss';

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
                            <li className="navigation-item">
                                Pokemon
                                <img src={pokebola} alt="Pokebola" className="pokebola"/>
                            </li>
                            <li className="navigation-item">Projeto</li>                            
                        </ul>
                    </div>
                </nav>

            </div>
        </header>
    );
}

export default Header;