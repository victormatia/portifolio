import { useTranslation } from 'react-i18next'
import styles from '../css/modules/Card.module.css'
import { DiGithubBadge } from 'react-icons/di'
import { HiRocketLaunch } from 'react-icons/hi2'

function Card({ projectInfos: { name, tag, thumb, repo, link } }) {
  const { t } = useTranslation();
  
  const isValidLink = (link) => {
    return !link ? styles['card__links-disabled']
      : styles['card__links-active'];
  };

  return (
    <li className={ styles['card'] }>
      <img className={ styles['card__image'] } src={ thumb } alt="miniatura do projeto" />
      <h4 className={ styles['card__title'] }>{ name }</h4>
      <p className={ styles['card__tag'] }>{ tag }</p>
      <section className={ styles['card__links'] }>
        <a href={ repo } target="_blank">
          <DiGithubBadge />
          <p>{ t('projectRepButton') }</p>
        </a>
        <a className={ isValidLink(link) } href={ link } target="_blank">
          <HiRocketLaunch />
          <p>{ t('projectDeployButton') }</p>
        </a>
      </section>
    </li>
  )
}

export default Card