import React from 'react';
import { aboutMe } from "../mock/mockApi";
import '../css/Timeline.css';


function Timeline() {
  const { timeLinePoints } = aboutMe;
  return (
    <section className="timeline">
      {
        timeLinePoints.map(({
          id, title, context, date,
        }) => {
          return (
            <div key={id} className='timeline-point'>
              <div className="title-context-section">
                <h3 className="point-title">{ title }</h3>
                <p className="point-context">{ context }</p>
              </div>
              <p className="point-date">{ date }</p>
              <div className="bulletpoint" />
            </div>
          );
        })
      }
      <div className="timeline-div" />
    </section>
  );
}

export default Timeline;
