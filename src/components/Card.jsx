import styles from '../css/modules/Card.module.css'
import { DiGithubBadge } from 'react-icons/di'
import { HiRocketLaunch } from 'react-icons/hi2'

function Card({ projectInfos: { name, tag, thumb, repo, link } }) {
  return (
    <li className={ styles['card'] }>
      <img className={ styles['card__image'] } src={ thumb } alt="miniatura do projeto" />
      <h4 className={ styles['card__title'] }>{ name }</h4>
      <p className={ styles['card__tag'] }>{ tag }</p>
      <section className={ styles['card__links'] }>
        <a href={ repo } target="_blank">
          <DiGithubBadge className={ styles['card__icon'] }  />
          <p>Repositório</p>
        </a>
        <a href={ link } target="_blank">
          <HiRocketLaunch className={ styles['card__icon'] } />
          <p>Deployment</p>
        </a>
      </section>
    </li>
  )
}

export default Card