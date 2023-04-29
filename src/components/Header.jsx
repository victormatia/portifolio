import logo from '../images/VITU-logo.png';
import styles from '../css/modules/Header.module.css'
import Switch from '../components/Switch';

function Header() {
  return (
    <header className={ styles['header'] }>
      <section className={ styles['header__l-side'] }>
        <img className={ styles['header__logo'] } src={ logo } alt="VITU logo" />
        <ul className={ styles['header__links'] }>
          <li><a href="#about">sobre</a></li>
          <li><a href="#projects">projetos</a></li>
          <li><a href="#contact">contato</a></li>
        </ul>
      </section>
      <Switch />
    </header>
  );
}

export default Header;
