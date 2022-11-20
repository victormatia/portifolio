import React from 'react'
import Header from './components/Header'
import './css/index.css'
import About from './pages/About'
import Home from './pages/Home'

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
    </main>
  )
}

export default App
