import logo from '../images/VITU-logo.png';
import styles from '../css/modules/MobileHeader.module.css'
import { CiMenuFries } from 'react-icons/ci'
import { useContext, useState } from 'react';
import globalContext from '../context/globalContext';
import LateralMenu from './LateralMenu';

export default function MobileHeader() {
  const { showBGHeader } = useContext(globalContext)
  const [showLMenu, setShowLMenu] = useState(false);

  const changeBGColor = () => showBGHeader ? styles['m-header__bg'] : '';

  return (
    <>
      <header className={ `${styles['m-header']} ${ changeBGColor() }` }>
        <img className={ styles['m-header__logo'] } src={ logo } alt="VITU logo" />
        <CiMenuFries onClick={ () => setShowLMenu((prev) => !prev) } />
      </header>
      {
        showLMenu && <LateralMenu setShowLMenu={ setShowLMenu } />
      }
    </>
  )
}
