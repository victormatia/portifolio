import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './css/index.css'
import { useRef, useEffect, useState } from 'react'
import Contact from './pages/Contact'

function App() {
  const [showNav, setShowNav] = useState(false);
  const containerRef = useRef(null);

  const options = {
    root:  null,
    rootMargin: '0px',
    threshold: 0.95,
  };
  
  const callback = (entries) => {
    const [entrie] = entries;
    const isVisible = entrie.isIntersecting;

    setShowNav(!isVisible)

  }
  
  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    observer.observe(containerRef.current);
  }, [containerRef])

  return (
    <main>
      <Header />
      { showNav && <Navbar /> }
      <section ref={ containerRef } id='home' className='home-background'>
        <Home />
      </section>
      <section id='about' className='about-background'>
        <About />
      </section>
      <section id='projects' className='projects-background'>
        <Projects />
      </section>
      <section id='contact' className='contact-background'>
        <Contact />
      </section>
    </main>
  )
}

export default App
