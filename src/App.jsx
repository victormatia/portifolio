import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { useRef, useEffect, useState } from 'react'
import Contact from './pages/Contact'
import { useContext } from 'react'
import globalContext from './context/globalContext'
import './css/Global.css';
import MobileHeader from './components/MobileHeader'

function App() {
  const { setCurrentPage, setShowBGHeader } = useContext(globalContext);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const optionsHome = {
    root:  null,
    rootMargin: '0px',
    threshold: 1,
  };

  const optionsOtherPages = {
    root:  null,
    rootMargin: '0px',
    threshold: 0.5,
  };
  
  const controlNavBar = (entries) => {
    const [entrie] = entries;
    const isVisible = entrie.isIntersecting;

    setCurrentPage(entrie.target.id);
    setShowBGHeader(!isVisible)
  }

  const updateCurrentPage = (entries) => {
    const [entrie] = entries;
    const { target: { id } } = entrie;

    const isVisible = entrie.isIntersecting;

    if (isVisible) setCurrentPage(id);
  }
  
  // Lembrete: Pesquisar se existe uma maneira mais eficiente de fazer isso.
  const home = new IntersectionObserver(controlNavBar, optionsHome);
  const about = new IntersectionObserver(updateCurrentPage, optionsOtherPages);
  const projects = new IntersectionObserver(updateCurrentPage, optionsOtherPages);
  const contact = new IntersectionObserver(updateCurrentPage, optionsOtherPages);

  useEffect(() => {
    home.observe(homeRef.current);
    about.observe(aboutRef.current);
    projects.observe(projectsRef.current);
    contact.observe(contactRef.current);

  }, [homeRef, aboutRef, projectsRef, contactRef]);

  return (
    <main>
      <Header />
      <MobileHeader />
      {/* { showNav && <Navbar /> } */}
      <section ref={ homeRef } id='home' className='home-background'>
        <Home />
      </section>
      <section ref={ aboutRef } id='about' className='about-background'>
        <About />
      </section>
      <section ref={ projectsRef } id='projects' className='projects-background'>
        <Projects />
      </section>
      <section ref={ contactRef } id='contact' className='contact-background'>
        <Contact />
      </section>
    </main>
  )
}

export default App
