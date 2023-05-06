import logo from '../images/VITU-logo.png';
import styles from '../css/modules/MobileHeader.module.css'
import { CiMenuFries } from 'react-icons/ci'
import { useContext } from 'react';
import globalContext from '../context/globalContext';

export default function MobileHeader() {
  const { showBGHeader } = useContext(globalContext)

  const changeBGColor = () => showBGHeader ? styles['m-header__bg'] : '';

  return (
    <header className={ `${styles['m-header']} ${ changeBGColor() }` }>
      <img className={ styles['m-header__logo'] } src={ logo } alt="VITU logo" />
      <CiMenuFries />
    </header>
  )
}
