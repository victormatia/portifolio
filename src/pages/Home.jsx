import React from 'react'
import hero from '../images/hero.png'
import arrow from '../images/arrow.png'
import styles from '../css/modules/Home.module.css'

function Home() {
  return (
    <section className={ styles['home'] }>
      <section className={ styles['home__content'] }>
        <section className={ styles['home__sides'] }>
          <section className={ styles['home__l-side'] }>
            <h1 className={ styles['home__title'] }>Olá pessoas! ✌🏽</h1>
            <section className={ styles['home__paragraph'] }>
              <p className='home-paragraph'>Eu sou Victor Matias, mas podem me chamar de Vitu, sou desenvolvedor full stack e apaixonado por design. <br/>
              Sejam bem-vindos ao meu portifólio!</p>
            </section>
          </section>
          <section className={ styles['home__r-side'] }>
            <img className={ styles['home__hero'] } src={ hero } alt="Foto de Victor Matias" />
          </section>
        </section>
      </section>
        <div>
          <img className={ styles['home__arrow'] } src={ arrow } alt="" />
        </div>
    </section>
  )
}

export default Home