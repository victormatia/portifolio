import React from "react";
import '../css/Timeline.css';

const DATA = [
  {
    id: 1,
    title: 'Descobri minha paixão por desenvolvimento de softwares',
    context: 'Precisei de um site para a minha empresa e descidi construir por conta própria',
    date: '2021',
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
    id: 1,
    title: 'Descobri minha paixão por desenvolvimento de softwares',
    context: 'Precisei de um site para a minha empresa e descidi construir por conta própria',
    date: '2021',
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
];

function Timeline() {
  return (
    <section className="timeline">
      { 
        DATA.map(({ id, title, context, date }) => (
            <div key={ id } className="timeline-point FLEX__ROW__SPACE-BETWEEN__CENTER">
              <div className="title-context-sec">
                <h3 className="point-title">{ title }</h3>
                <p className="point-context">{ context }</p>
              </div>
              <div className="area-bulletpoint">
                <div className="bulletpoint"></div>
              </div>
              <p className="point-date">{ date }</p>
          </div>
        ))
      }
    </section>
  );
};

export default Timeline;
