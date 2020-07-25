import React from 'react';
import './styles.scss';
import TopMenu from '../../TopMenu';
import RegisterStoreImage from '../../../assets/images/vectors/registerstoreheader.svg';

const Header = () => (
  <div className="Header">
    <TopMenu color="green" />
    <div className="Header__main-container">
      <div className="Header__image-container">
        <img
          src={RegisterStoreImage}
          alt="Homem com megafone"
          className="Header__image"
        />
      </div>
      <div className="Header__form-container">
        <form action="post" className="Header__form">
          <h3 className="Header__form-title">
            Preencha o cadastro e entraremos em contato
          </h3>
          <div className="Header__form-name-container">
            <input
              type="text"
              name="name"
              id="name"
              className="Header__input"
              placeholder="Nome do responsável"
            />
            <input
              type="text"
              name="storeName"
              id="storeName"
              className="Header__input"
              placeholder="Nome do estabelecimento"
            />
          </div>
          <div className="Header__form-category-container">
            <input
              type="text"
              name="storeCategory"
              id="storeCategory"
              className="Header__input"
              placeholder="Categoria do estabelecimento"
            />
          </div>
          <div className="Header__form-city-container">
            <input
              type="text"
              name="storeCity"
              id="storeCity"
              className="Header__input"
              placeholder="Cidade"
            />
          </div>
          <div className="Header__form-phone-container">
            <input
              type="number"
              name="storePhone"
              id="storePhone"
              className="Header__input"
              placeholder="Telefone para contato"
            />
          </div>
          <div className="Header__form-email-container">
            <input
              type="email"
              name="storeEmail"
              id="storeEmail"
              className="Header__input"
              placeholder="Email"
            />
          </div>
          <input type="submit" value="Enviar" className="Header__submit" />
        </form>
      </div>
    </div>
  </div>
);

export default Header;
