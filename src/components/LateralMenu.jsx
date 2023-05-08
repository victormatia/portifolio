import Switch from '../components/Switch';
import styles from '../css/modules/LateralMenu.module.css'
import { IoMdClose } from 'react-icons/io'

export default function LateralMenu({ setShowLMenu }) {
  return (
    <menu className={ styles['l-menu'] } onClick={() => setShowLMenu((prev) => !prev)}>
      <section className={ styles['l-menu__content'] }>
        <IoMdClose />
        <a href="#home">home</a>
        <a href="#about">sobre</a>
        <a href="#projects">projetos</a>
        <a href="#contact">contato</a>
        <row className={ styles['l-menu__row'] } />
        <Switch />
      </section>
    </menu>
  )
}
