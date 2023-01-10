import React from 'react';
import Timeline from '../components/Timeline';
import { aboutMe } from "../mock/mockApi";
import '../css/About.css';

function About() {
  const { about } = aboutMe;
  return (
    <section className='about'>
       <h1 className='about-title'>Sobre mim</h1>
       <p className='about-description'>{ about }</p>
       <Timeline />
    </section>
  )
}

export default About;
