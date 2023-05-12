import { useState } from 'react'
import styles from '../css/modules/Switch.module.css'
import { useTranslation } from 'react-i18next';

function Switch() {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(
    {
      pt: styles['switch__p__enabled'],
      en: styles['switch__p__disabled'],
      background: styles['switch__trigger__pt-active'],
    },
  );

  // Da pra melhor essa lógica. language e currLanguage fazem coisas parecidas
  const [_currLanguage, setCurrLanguage] = useState('ptBR')

  const translate = () => {
    setCurrLanguage((prev) => {
      const curr = prev === 'ptBR' ? 'en' : 'ptBR'

      i18n.changeLanguage(curr)
      
      return curr
    })
  }

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