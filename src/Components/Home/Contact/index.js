import React from 'react';
import './styles.scss';
import contactImage from '../../../assets/images/contact.png';

const Contact = () => (
  <div className="Contact">
    <h4 className="Contact__subtitle">QUER SABER MAIS?</h4>
    <h3 className="Contact__title">FALE CONOSCO</h3>
    <div className="Contact__main-container">
      <div className="Contact__image-container">
        <img
          src={contactImage}
          alt="Pessoas ao redor de um envelope"
          className="Contact__image"
        />
      </div>
      <form className="Contact__form-container">
        <div className="Contact__form-name">
          <input
            className="Contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Primeiro Nome"
            required
          />
          <input
            className="Contact__input"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Último nome"
            required
          />
        </div>
        <div className="Contact__form-email">
          <input
            className="Contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="Contact__form-text-area">
          <textarea
            className="Contact__input"
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Mensagem"
            required
          />
        </div>
        <input
          className="Contact__submit"
          type="submit"
          value="Enviar Mensagem"
        />
      </form>
    </div>
  </div>
);
export default Contact;
