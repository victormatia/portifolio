import React from "react";
import Card from "../components/Card";
import { projects } from "../mock/mockApi";
import styles from '../css/modules/Projects.module.css'

function Projects () {
  return (
    <section className={ styles['projects'] }>
      <section className={ styles['projects__content'] }>
        <h1 className={ styles['projects__title'] }>Projetos</h1>
        <p className={ styles['projects__paragraph'] }>Aqui estão alguns projetos que, durante minha jornada como desenvolvedor, me orgulho de ter feito ou participado</p>
        <ul className={ styles['projects__list'] }>
          { projects.map(({ name, tag, thumb, repo, link }, i) => (
            <Card projectInfos={{ name, tag, thumb, repo, link }}  key={ i }/>
            )) }
        </ul>
      </section>
    </section>
  )
}

export default Projects;