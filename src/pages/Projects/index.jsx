// import React from "react";
// import Card from "../components/Card";
// import { projects } from "../mock/mockApi";
import styles from './style.module.css';
import { useTranslation } from "react-i18next";

function Projects () {
  const { t } = useTranslation();
  return (
    <section className={ styles['projects'] }>
      <section className={ styles['projects__content'] }>
        <h1 className={ styles['projects__title'] }>{ t('projectsTitle') }</h1>
        <p className={ styles['projects__paragraph'] }>{ t('projectsParagraph') }</p>
        <div className={ styles['manutention'] }>
          <p>Em manutenção (Em breve novos projetos)</p>
        </div>
        {/* <ul className={ styles['projects__list'] }>
          { projects.map(({ name, tag, thumb, repo, link }, i) => (
            <Card projectInfos={{ name, tag, thumb, repo, link }}  key={ i }/>
            )) }
        </ul> */}
      </section>
    </section>
  )
}

export default Projects;