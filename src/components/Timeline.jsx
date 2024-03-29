import React, { useContext, useMemo } from 'react';
import styles from '../css/modules/Timeline.module.css'
import globalContext from '../context/globalContext';


function Timeline() {
  const { timeLinePoints } = useContext(globalContext);
  
  return (
    <section className={ styles['timeline'] }>
      {
        timeLinePoints.map(({
          id, title, context, date,
        }) => (
          <section key={id} className={ styles['timeline__point'] }>
            <section className={styles['timeline__content']}>
              <h3 className={ styles['timeline__title'] }>{ title }</h3>
              <p className={ styles['timeline__context'] }>{ context }</p>
            </section>
            <time  className={ styles['timeline__date'] }>{ date }</time>
            <div className={ styles['timeline__bulletpoint'] }></div>
          </section>
        ))
      }
    </section>
  );
}

export default Timeline;
