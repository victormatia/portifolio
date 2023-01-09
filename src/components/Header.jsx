import React, { useEffect, useState } from 'react';
import logo from '../images/VITU-logo.png';
import '../css/Header.css'
import Switch from '../components/Switch';

function Header() {
  return (
    <header className='header FLEX__ROW__SPACE-BETWEEN__CENTER'>
      <section className='header-left-side FLEX__ROW__SPACE-BETWEEN__CENTER'>
        <img className='header-logo' src={ logo } alt="VITU logo" />
        <ul className='header-nav'>
          <li className='header-nav-link'><a href="#about">sobre</a></li>
          <li className='header-nav-link'><a href="#projects">projetos</a></li>
          <li className='header-nav-link'><a href="#contact">contato</a></li>
        </ul>
      </section>
      
      <Switch />
    </header>
  );
}

export default Header;
