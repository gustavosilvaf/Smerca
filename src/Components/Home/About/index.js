import React from 'react';
import './styles.scss';
import logoGreen from '../../../assets/images/green-logo.svg';
import mockup from '../../../assets/images/mockup.png';

const About = () => (
  <div className="About" id="who-we-are">
    <div className="About__main-container">
      <div className="About__text-container">
        <img className="About__logo" src={logoGreen} alt="Logo" />
        <p className="About__text">
          Somos um marketplace especializado em mercados, empórios, açougues,
          hortifrutis, peixarias, bebidas entre outras modalidades do varejo
          alimentício.
        </p>
        <p className="About__text">
          Então, se o assunto for esse, deixa com a gente!! Sente-se, selecione
          seus itens, o horário que mais te agrada e continue fazendo o que te
          faz feliz enquanto cuidamos do seu pedido.{' '}
        </p>
      </div>
      <div className="About__image-container">
        <img
          className="About__image"
          src={mockup}
          alt="Celular mostrando site"
        />
      </div>
    </div>
    <div className="About__download-container">
      <div className="About__download-text-container">
        <h3 className="About__download-text">Baixe</h3>
        <h3 className="About__download-text About__download-text--green">
          Agora
        </h3>
      </div>
      <div className="About__download-button-container">
        <a href="home" className="About__button">
          Grátis para Android
        </a>
        <a href="home" className="About__button">
          Grátis para IOS
        </a>
      </div>
    </div>
  </div>
);

export default About;
