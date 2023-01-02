import React from "react";
import Card from "../components/Card";
import '../css/Projects.css';

const mockProjects = [
  {
    name: 'Recipes',
    repo: 'https://github.com/victormatia/recipes-app',
    link: 'https://recipes-hdxwcw7ku-victormatia.vercel.app/',
  },
  {
    name: 'Wallet',
    repo: 'https://github.com/victormatia/recipes-app',
    link: 'https://recipes-hdxwcw7ku-victormatia.vercel.app/',
  },
  {
    name: 'BlogsApi',
    repo: 'https://github.com/victormatia/recipes-app',
    link: 'https://recipes-hdxwcw7ku-victormatia.vercel.app/',
  },
  {
    name: 'Trybe Tunes',
    repo: 'https://github.com/victormatia/recipes-app',
    link: 'https://recipes-hdxwcw7ku-victormatia.vercel.app/',
  },
];

function Projects () {
  return (
    <section id="projects" className="projects">
      <section className="projects-title-section">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-title-pipe"/>
      </section>
      <ul className="project-list">
        { mockProjects.map(({ name, repo, link }, i) => (
          <Card projectInfos={{ name, repo, link }}  key={ i }/>
        )) }
      </ul>
    </section>
  )
}

export default Projects;