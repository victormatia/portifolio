import React from 'react';
import navbarIcon from '../images/navbar-icon.png'
import '../css/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-background-icon'><img  className="navbar-icon" src={ navbarIcon } alt="icone da barra de navegação" /></div>
      <ul className='navbar-link-list'>
        <li className='navbar-link'>home</li>
        <li className='navbar-link'>sobre</li>
        <li className='navbar-link'>projetos</li>
        <li className='navbar-link'>contato</li>
      </ul>
    </nav>
  )
}

export default Navbar;
