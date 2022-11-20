import React, { useState } from 'react'
import '../css/Switch.css'

function Switch() {
  const [language, setLanguage] = useState(
    { pt: 'ON', en: 'OFF', background: 'PT' },
  );

  return (
    <section className='header-rigth-side FLEX__ROW__SPACE-BETWEEN__CENTER'>
      <p className={`header-switch-label ${language.pt}`}>PT-BR</p>
        <div
          className='header-switch-background'
          onClick={ () => {
            if (language.pt === 'ON') {
              setLanguage({ pt: 'OFF', en: 'ON', background: 'EN' })
            } else {
              setLanguage({ pt: 'ON', en: 'OFF', background: 'PT' })
            }
          } }
        >
          <div className={`header-switch ${language.background}`}></div>
        </div>
        <p className={`header-switch-label ${language.en}`}>EN</p>
    </section>
  )
}

export default Switch