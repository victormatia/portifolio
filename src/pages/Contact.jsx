import React from "react";
import githubIcon from "../images/github-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";
import emailIcon from "../images/email-icon.png";
import "../css/Contact.css";

const copyEmail = () => {
  const email = "victormatias.contato@gmail.com";

  navigator.clipboard.writeText(email);
  alert("Email copiado!");
}

function Contact () {
  return (
    <section className="contact">
      <h1 className="contact-title">Contact</h1>
      <ul className="contact-list">
        <a href="https://www.linkedin.com/in/-victormatias/" target="_blank">
          <li className="contact-list-item likedin-button">
            <img src={ linkedinIcon } alt="linkedIn icon" />
            <p>LinkedIn</p>
          </li>
        </a>
        <a href="https://github.com/victormatia" target="_blank">
          <li className="contact-list-item github-button">
            <img src={ githubIcon } alt="github icon" />
            <p>GitHub</p>
          </li>
        </a>
        <li className="contact-list-item email-button" onClick={ copyEmail }>
          <img src={ emailIcon } alt="email icon" />
          <p>Email</p>
        </li>
      </ul>
      <p className="contact-copy-right">© Todos os direitos reservados | Um site desenvolvido por Victor Matias</p>
    </section>
  );
}

export default Contact;
