import React from 'react'
import "../css/Card.css";
import githubIcon from "../images/github-icon.png";

function Card({ projectInfos: { name, repo, link } }) {
  return (
    <li className='card'>
      <img className='card-image' src="https://cdn.dribbble.com/userupload/4160565/file/original-f6d2c9b9fc324e41bbca071ed29a036a.png?compress=1&resize=752x564" alt="miniatura do projeto" />
      <h4 className='card-title' style={ { color: "black" } }>{ name }</h4>
      <section className='card-links-section'>
        <a className='card-repo-link' href={ repo } target="_blank"><img className='card-icons' src={ githubIcon } alt="" /><p>Repositório</p></a>
        <a className='card-deploy-link' href={ link } target="_blank"><p>Deployment</p></a>
      </section>
    </li>
  )
}

export default Card