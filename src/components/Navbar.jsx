import React from 'react';
import navbarIcon from '../images/navbar-icon.png'
import '../css/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-background-icon'><img  className="navbar-icon" src={ navbarIcon } alt="icone da barra de navegação" /></div>
      <ul className='navbar-link-list'>
      <li><a className='navbar-link' href="#home">home</a></li>
      <li><a className='navbar-link' href="#about">sobre</a></li>
      <li><a className='navbar-link' href="#projects">projetos</a></li>
      <li><a className='navbar-link' href="#">contato</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
