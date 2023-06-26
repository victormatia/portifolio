import { useContext, useState } from 'react'
import styles from '../css/modules/Switch.module.css'
import { useTranslation } from 'react-i18next';
import globalContext from '../context/globalContext';

function Switch() {
  const {setCurrLanguage} = useContext(globalContext);
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(
    {
      pt: styles['switch__p__enabled'],
      en: styles['switch__p__disabled'],
      background: styles['switch__trigger__pt-active'],
    },
  );

  const translate = () => {
    setCurrLanguage((prev) => {
      const curr = prev === 'ptBR' ? 'en' : 'ptBR'

      i18n.changeLanguage(curr)
      
      return curr
    })
  };

  return (
    <section className={ styles['switch'] }>
      <p className={ language.pt }>PT-BR</p>
      <div
        className={ styles['switch__background'] }
        onClick={ () => {
          translate()

          if (language.pt === styles['switch__p__enabled']) {
            setLanguage({
                pt: styles['switch__p__disabled'],
                en: styles['switch__p__enabled'],
                background: styles['switch__trigger__en-active'],
              })
          } else {
            setLanguage({
              pt: styles['switch__p__enabled'],
              en: styles['switch__p__disabled'],
              background: styles['switch__trigger__pt-active'],
              })
          }
        } }
      >
        <div className={`${styles['switch__trigger']} ${ language.background }`}></div>
      </div>
      <p className={ language.en }>EN</p>
    </section>
  )
}

export default Switch