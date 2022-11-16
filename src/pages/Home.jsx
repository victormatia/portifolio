import React from 'react'
import hero from '../images/hero.png'
import underlines from '../images/underlines.png'
import '../css/Home.css'

function Home() {
  return (
    <section className='home'>
      <section className='home-left-side'>
        <p className='home-title'><span>Olá</span> pessoas!</p>
        <section className='home-paragraph-section'>
          <p className='home-paragraph'>Eu sou Victor Matias,<br /> mas pode me chamar de Vitu. <br/>
          Sejam bem-vindos ao meu portifólio</p>
          <img className='home-underlines' src={ underlines } alt="underlines" />
        </section>
      </section>

      <section className='home-right-side'>
        <img className='home-hero' src={ hero } alt="Foto de Victor Matias" />
      </section>
    </section>
  )
}

export default Home