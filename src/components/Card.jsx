import React from 'react'
import "../css/Card.css";
import githubIcon from "../images/github-icon.png";
import deployIcon from "../images/deploy-icon.png";

function Card({ projectInfos: { name, tag, thumb, repo, link } }) {
  return (
    <li className='card'>
      <img className='card-image' src={ thumb } alt="miniatura do projeto" />
      <h4 className='card-title' style={ { color: "black" } }>{ name }</h4>
      <p className='card-tag'>{ tag }</p>
      <section className='card-links-section'>
        <a className='card-repo-link' href={ repo } target="_blank"><img className='card-github-icon' src={ githubIcon } alt="" /><p>Repositório</p></a>
        <a className='card-deploy-link' href={ link } target="_blank"><img className='card-deploy-icon' src={ deployIcon } alt="" /><p>Deployment</p></a>
      </section>
    </li>
  )
}

export default Card