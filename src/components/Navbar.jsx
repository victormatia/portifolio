import React from 'react';
import navbarIcon from '../images/navbar-icon.png'
import { useContext } from 'react';
import globalContext from '../context/globalContext';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/Navbar.css'

function Navbar() {
  const { currentPage } = useContext(globalContext);
  const [pageActive, setPageActive] = useState({
    isAbout: '',
    isProjects: '',
    isContact: '',
  });

  useEffect(() => {

    if(currentPage === 'about') setPageActive({
      isAbout: 'active',
      isProjects: '',
      isContact: '',
    });

    if(currentPage === 'projects') setPageActive({
      isAbout: '',
      isProjects: 'active',
      isContact: '',
    });

    if(currentPage === 'contact') setPageActive({
      isAbout: '',
      isProjects: '',
      isContact: 'active',
    });

  }, [currentPage]);

  return (
    <nav className='navbar'>
      <div className='navbar-background-icon'><img  className="navbar-icon" src={ navbarIcon } alt="icone da barra de navegação" /></div>
      <ul className='navbar-link-list'>
      <li><a className='navbar-link' href="#home">home</a></li>
      <li><a className={ `navbar-link ${pageActive.isAbout}` } href="#about">sobre</a></li>
      <li><a className={ `navbar-link ${pageActive.isProjects}` }href="#projects">projetos</a></li>
      <li><a className={ `navbar-link ${pageActive.isContact}` } href="#contact">contato</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
