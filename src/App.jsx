import React from 'react'
import Header from './components/Header'
import './css/index.css'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <main>
      <section className='home-background'>
        <Header />
        <Home />
      </section>
      <section className='about-background'>
        <About />
      </section>
    </main>
  )
}

export default App
