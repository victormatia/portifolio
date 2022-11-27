import React from 'react';
import '../css/Timeline.css';

const DATA = [
  {
    id: 1,
    title: 'Descobri minha paixão por desenvolvimento de softwares',
    context: 'Precisei de um site para a minha empresa e descidi construir por conta própria',
    date: '2021/06',
  },
  {
    id: 2,
    title: 'Descidi me dedicar totalmente aos estudos de programação',
    context: 'Optei por fazer transição de carreira  e iniciei o curso de desenvolvimento web na Trybe para me tornar um profissional Full Stack',
    date: '2022/04',
  },
  {
    id: 3,
    title: 'Descidi me dedicar totalmente aos estudos de programação',
    context: 'Optei por fazer transição de carreira  e iniciei o curso de desenvolvimento web na Trybe para me tornar um profissional Full Stack',
    date: '2022/04',
  },
  {
    id: 4,
    title: 'Me tornei um profissional Front-end',
    context: 'Finalizei o segundo módulo da Trybe, ganhei a certificação de profissional front-end e posso atuar no mercado',
    date: '2022/06',
  },
  
];

function Timeline() {
  return (
    <section className="timeline">
      {
        DATA.map(({
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
