import React from 'react';
import Timeline from '../components/Timeline';
import { aboutMe } from "../mock/mockApi";
import styles from '../css/modules/About.module.css'

function About() {
  const { about } = aboutMe;
  return (
    <section className={ styles['about'] }>
       <section className={ styles['about__content'] }>
         <h1 className={ styles['about__title'] }>Sobre mim</h1>
         <p className={ styles['about__paragraph'] }>{ about }</p>
         <Timeline />
       </section>
    </section>
  )
}

export default About;
