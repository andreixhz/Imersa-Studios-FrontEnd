import React from 'react';

import Logo from '../../assets/images/logo.png'

import './style.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <>
            <div className="menu al-m">
                <div className="container">
                    <img src={Logo} alt=""/>
                </div>
            </div>
            <div className="bottomMenu al-m">
                <div className="container al-m">
                    <Link to="/">Inicio</Link>
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/servicos">Serviços</Link>
                    <Link to="/contatos">Contatos</Link>
                    <Link to="/store">Loja</Link>
                    <Link to="/projetos">Projetos</Link>
                </div>
            </div>
        </>
    );
}

export default Menu;