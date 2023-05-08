import React from 'react';
import navbarIcon from '../images/navbar-icon.png'
import { useContext } from 'react';
import globalContext from '../context/globalContext';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../css/modules/Navbar.module.css'

function Navbar() {
  const { currentPage } = useContext(globalContext);
  const [showMenu, setShowMenu] = useState(false)
  const [pageActive, setPageActive] = useState({
    isAbout: styles['navbar__link__off'],
    isProjects: styles['navbar__link__off'],
    isContact: styles['navbar__link__off'],
  });

  useEffect(() => {
    if(currentPage === 'about') setPageActive({
      isAbout: styles['navbar__link__on'],
      isProjects: styles['navbar__link__off'],
      isContact: styles['navbar__link__off'],
    });

    if(currentPage === 'projects') setPageActive({
      isAbout: styles['navbar__link__off'],
      isProjects: styles['navbar__link__on'],
      isContact: styles['navbar__link__off'],
    });

    if(currentPage === 'contact') setPageActive({
      isAbout: styles['navbar__link__off'],
      isProjects: styles['navbar__link__off'],
      isContact: styles['navbar__link__on'],
    });

  }, [currentPage]);

  return (
    <nav
      className={ styles['navbar'] }
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <div className={ styles['navbar__bg-home-icon'] }>
        <a href="#home">
          <img  className={ styles['navbar__home-icon'] } src={ navbarIcon } alt="icone da barra de navegação" />
        </a>
      </div>
      {
        showMenu  && (
          <ul className={ styles['navbar__links'] }>
            <li><a className={ `navbar-link ${pageActive.isAbout}` } href="#about">sobre</a></li>
            <li><a className={ `navbar-link ${pageActive.isProjects}` }href="#projects">projetos</a></li>
            <li><a className={ `navbar-link ${pageActive.isContact}` } href="#contact">contato</a></li>
          </ul>
        )
      }
    </nav>
  )
}

export default Navbar;
