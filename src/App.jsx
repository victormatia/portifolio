import React from 'react'
import Header from './components/Header'
import './css/index.css'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <main>
      <Header />
      <section id='home' className='home-background'>
        <Home />
      </section>
      <section id='about' className='about-background'>
        <About />
      </section>
      <section id='projects' className='projects-background'>
        <Projects />
      </section>
    </main>
  )
}

// o id para a navegação é melhor posicionado na section de background de cada página

export default App
