import React, { useEffect, useState } from 'react';
import logo from '../images/VITU-logo.png';
import '../css/Header.css'

function Header() {
  const [language, setLanguage] = useState(
    { pt: 'ON', en: 'OFF', background: 'PT' },
  );

  useEffect(() => {
    console.log(language.pt, language.en);
    console.log(language.background);
  }, [language]);

  return (
    <header className='header FLEX__ROW__SPACE-EVENLY__CENTER'>
      <section className='header-left-side FLEX__ROW__SPACE-EVENLY__CENTER'>
        <img className='header-logo' src={ logo } alt="VITU logo" />
        <ul className='header-nav'>
          <li className='header-nav-link'><a href="">sobre</a></li>
          <li className='header-nav-link'><a href="">projetos</a></li>
          <li className='header-nav-link'><a href="">contato</a></li>
        </ul>
      </section>

      <section className='header-rigth-side FLEX__ROW__SPACE-EVENLY__CENTER'>
        <p className={`header-trigger-label ${language.pt}`}>PT-BR</p>
        <div
          className='header-trigger-background'
          onClick={ () => {
            if (language.pt === 'ON') {
              setLanguage({ pt: 'OFF', en: 'ON', background: 'EN' })
            } else {
              setLanguage({ pt: 'ON', en: 'OFF', background: 'PT' })
            }
          } }
        >
          <div className={`header-trigger ${language.background}`}></div>
        </div>
        <p className={`header-trigger-label ${language.en}`}>EN</p>
      </section>
    </header>
  );
}

export default Header;
