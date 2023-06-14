import React from 'react';
import Timeline from '../components/Timeline';
import styles from '../css/modules/About.module.css'
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section className={ styles['about'] }>
       <section className={ styles['about__content'] }>
         <h1 className={ styles['about__title'] }>{t('aboutTitle')}</h1>
         <p className={ styles['about__paragraph'] }>{t('aboutParagraph')}</p>
         <Timeline />
       </section>
    </section>
  )
}

export default About;
