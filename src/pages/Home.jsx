import { useTranslation } from 'react-i18next'
import hero from '../images/hero.png'
import arrow from '../images/arrow.png'
import styles from '../css/modules/Home.module.css'

function Home() {
  const { t } = useTranslation();

  return (
    <section className={ styles['home'] }>
      <section className={ styles['home__content'] }>
        <section className={ styles['home__sides'] }>
          <section className={ styles['home__l-side'] }>
            <h1 className={ styles['home__title'] }>{ t('homeTitle') }</h1>
            <section className={ styles['home__paragraph'] }>
              <p>{t('homePragraphPT1')}</p>
              <p>{t('homePragraphPT2')}</p>
            </section>
          </section>
          <section className={ styles['home__r-side'] }>
            <img className={ styles['home__hero'] } src={ hero } alt="Foto de Victor Matias" />
          </section>
        </section>
      </section>
        <div>
          <img className={ styles['home__arrow'] } src={ arrow } alt="" />
        </div>
    </section>
  )
}

export default Home