import { DiGithubBadge } from 'react-icons/di'
import { AiFillLinkedin } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import styles from '../css/modules/Contact.module.css'
import { useTranslation } from 'react-i18next'

const copyEmail = () => {
  const email = "victormatias.contato@gmail.com";

  navigator.clipboard.writeText(email);
  alert("Email copiado!");
}

function Contact () {
  const { t } = useTranslation();

  return (
    <section className={ styles['contact'] }>
      <section className={ styles['contact__content'] }>
        <h1 className={ styles['contact__title'] }>{ t('contactTitle') }</h1>
        <ul className={ styles['contact__list'] }>
          <a href="https://www.linkedin.com/in/-victormatias/" target="_blank">
            <li className={ `${styles['contact__item']} ${styles['contact__item__blue-bg']}` }>
              <AiFillLinkedin />
              <p>LinkedIn</p>
            </li>
          </a>
          <a href="https://github.com/victormatia" target="_blank">
            <li className={ `${styles['contact__item']} ${styles['contact__item__black-bg']}` }>
              <DiGithubBadge />
              <p>GitHub</p>
            </li>
          </a>
          <li className={ `${styles['contact__item']} ${styles['contact__item__red-bg']}` } onClick={ copyEmail }>
            <HiOutlineMail />
            <p>Email</p>
          </li>
        </ul>
        <p className={ styles['contact__credits'] }>{ t('contactCredits') }</p>
      </section>
    </section>
  );
}

export default Contact;
