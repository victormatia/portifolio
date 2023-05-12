import logo from '../images/VITU-logo.png';
import styles from '../css/modules/Header.module.css'
import Switch from '../components/Switch';
import { useContext, useEffect, useRef } from 'react';
import globalContext from '../context/globalContext';
import { useTranslation } from 'react-i18next';

function Header() {
  const { setIsNavBarActive } = useContext(globalContext)
  const headerRef = useRef(null);
  const { t } = useTranslation()

  const options = {
    root:  null,
    rootMargin: '0px',
    threshold: 1,
  };

  const controlNavBar = (entries) => {
    const [entrie] = entries;

    setIsNavBarActive(!entrie.isIntersecting);
  }

  const header = new IntersectionObserver(controlNavBar, options)

  useEffect(() => { header.observe(headerRef.current) }, [headerRef])

  return (
    <header ref={ headerRef } className={ styles['header'] }>
      <section className={ styles['header__l-side'] }>
        <img className={ styles['header__logo'] } src={ logo } alt="VITU logo" />
        <ul className={ styles['header__links'] }>
          <li><a href="#about">{t('headerMenuItenAbout')}</a></li>
          <li><a href="#projects">{t('headerMenuItenProjects')}</a></li>
          <li><a href="#contact">{t('headerMenuItenContact')}</a></li>
        </ul>
      </section>
      <section className={ styles['header__r-side'] }>
        <Switch />
      </section>
    </header>
  );
}

export default Header;
