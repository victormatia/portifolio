import { useState } from 'react'
import styles from '../css/modules/Switch.module.css'

function Switch() {
  const [language, setLanguage] = useState(
    {
      pt: styles['switch__p__enabled'],
      en: styles['switch__p__disabled'],
      background: styles['switch__trigger__pt-active'],
    },
  );

  return (
    <section className={ styles['switch'] }  title='Funcionalidade Indisponível'>
      <p className={ language.pt }>PT-BR</p>
        <div
          className={ styles['switch__background'] }
          onClick={ () => {
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