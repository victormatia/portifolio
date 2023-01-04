import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './css/index.css'

function App() {
  return (
    <main>
      <Header />
      <Navbar />
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
