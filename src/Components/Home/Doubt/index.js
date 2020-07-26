import React from 'react';
import './styles.scss';
import doubtImage from '../../../assets/images/doubt.png';
import doubleChevron from '../../../assets/images/vectors/double-chevron.png';

const Doubt = () => (
  <div className="Doubt">
    <h3 className="Doubt__title">ESTÁ COM DÚVIDAS?</h3>
    <div className="Doubt__main-container">
      <img className="Doubt__image" src={doubtImage} alt="Homem com dúvida" />
      <a className="Doubt__button" href="home">
        Perguntas frequentes <img className="Doubt__chevron" src={doubleChevron} alt="Setas"/>
      </a>
    </div>
  </div>
);

export default Doubt;
