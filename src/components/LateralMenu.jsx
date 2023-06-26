import { useTranslation } from 'react-i18next';
import Switch from '../components/Switch';
import styles from '../css/modules/LateralMenu.module.css'
import { IoMdClose } from 'react-icons/io'

export default function LateralMenu({ setShowLMenu }) {
  const { t } = useTranslation();

  return (
    <menu className={ styles['l-menu'] } onClick={() => setShowLMenu((prev) => !prev)}>
      <section className={ styles['l-menu__content'] }>
        <IoMdClose />
        <a href="#home">{ t('headerMenuItenHome') }</a>
        <a href="#about">{ t('headerMenuItenAbout') }</a>
        <a href="#projects">{ t('headerMenuItenProjects') }</a>
        <a href="#contact">{ t('headerMenuItenContact') }</a>
        <row className={ styles['l-menu__row'] } />
        <Switch />
      </section>
    </menu>
  )
}
