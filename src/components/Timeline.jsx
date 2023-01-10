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
          let align = '';

          if (id % 2 === 0) {
            align = 'timeline-point-left';

            return (
              <div key={id} className={`${align}`}>

                <div className="date-section">
                  <p className="point-date">{ date }</p>
                </div>

                <div className="bulletpoint-section">
                  <div className="bulletpoint" />
                </div>

                <div className="title-context-section">
                  <h3 className="point-title">{ title }</h3>
                  <p className="point-context">{ context }</p>
                </div>
              </div>
            );
          }

          align = 'timeline-point-right';

          return (
            <div key={id} className={`${align}`}>
              <div className="title-context-section">
                <h3 className="point-title">{ title }</h3>
                <p className="point-context">{ context }</p>
              </div>

              <div className="bulletpoint-section">
                <div className="bulletpoint" />
              </div>

              <div className="date-section">
                <p className="point-date">{ date }</p>
              </div>
            </div>
          );
        })
      }
      <div className="timeline-div" />
    </section>
  );
}

export default Timeline;
