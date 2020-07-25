import React from 'react';
import './styles.scss';
import registerImage from '../../../assets/images/vectors/register.svg';

const RegisterStoreContainerContainer = () => (
  <div className="RegisterStoreContainer">
    <h3 className="RegisterStoreContainer__title">CADASTRE SUA LOJA</h3>
    <p className="RegisterStoreContainer__description">
      Você é nosso parceiro, só ganhamos se você ganhar! Então, sem mimimi, nada
      de taxa de adesão ou mensalidade, pague apenas por comissão em cima das
      suas vendas
    </p>
    <img
      className="RegisterStoreContainer__image"
      src={registerImage}
      alt="Ilustração de um homem selecionando itens no celular"
    />
    <a className="RegisterStoreContainer__button" href="home">
      Cadastre sua loja agora
    </a>
  </div>
);

export default RegisterStoreContainerContainer;
