import React from 'react'

function Card({ projectInfos: { name, repo, link } }) {
  return (
    <li>
      <h4 style={ { color: "black" } }>{ name }</h4>
      <a href={ repo } target="_blank">Repositório</a>
      <a href={ link } target="_blank">Deployment</a>
    </li>
  )
}

export default Card