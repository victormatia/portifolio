import React from 'react';
import { aboutMe } from "../mock/mockApi";
import styles from '../css/modules/Timeline.module.css'


function Timeline() {
  const { timeLinePoints } = aboutMe;
  return (
    <section className={ styles['timeline'] }>
      {
        timeLinePoints.map(({
          id, title, context, date,
        }) => (
          <section key={id} className={ styles['timeline__point'] }>
            <section className={styles['timeline__content']}>
              <time>{ date }</time>
              <h3 className={ styles['timeline__title'] }>{ title }</h3>
              <p className={ styles['timeline__context'] }>{ context }</p>
            </section>
            <div className={ styles['timeline__bulletpoint'] }></div>
          </section>
        ))
      }
    </section>
  );
}

export default Timeline;
