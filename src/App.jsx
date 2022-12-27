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
      <section className='home-background'>
        <Home />
      </section>
      <section className='about-background'>
        <About />
      </section>
      <section className='projects-background'>
        <Projects />
      </section>
    </main>
  )
}

export default App
