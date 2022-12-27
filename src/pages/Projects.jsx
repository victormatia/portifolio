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
  }
];

function Projects () {
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <ul>
        { mockProjects.map(({ name, repo, link }, i) => (
          <Card projectInfos={{ name, repo, link }}  key={ i }/>
        )) }
      </ul>
    </section>
  )
}

export default Projects;