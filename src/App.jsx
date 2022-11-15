import React from 'react'
import Header from './components/Header'
import './css/index.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <section className='home-background'>
        <main>
          <Header />
          <Home />
          <div>Este será o meu portifólio</div>
        </main>
      </section>
    </>
  )
}

export default App
