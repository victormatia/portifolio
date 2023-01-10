import React from "react";
import Card from "../components/Card";
import { projects } from "../mock/mockApi";
import '../css/Projects.css';

function Projects () {
  return (
    <section className="projects">
      <section className="projects-title-section">
        <h1 className="projects-title">Projetos</h1>
        <div className="projects-title-pipe"/>
      </section>
      <ul className="project-list">
        { projects.map(({ name, tag, repo, link }, i) => (
          <Card projectInfos={{ name, tag, repo, link }}  key={ i }/>
        )) }
      </ul>
    </section>
  )
}

export default Projects;