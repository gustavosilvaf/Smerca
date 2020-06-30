import React from 'react';
import './styles.scss';
import logoWhite from '../../assets/images/white-logo.svg';
import { menuItens } from '../../utils/constants';
import appStore from '../../assets/images/vectors/app-store-white.svg';
import googlePlay from '../../assets/images/vectors/google-play-white.svg';
import SocialIcons from '../SocialIcons';

const Footer = () => (
  <div className="Footer">
    <div className="Footer__main-container">
      <div className="Footer__logo-container">
        <img className="Footer__logo" src={logoWhite} alt="Logo" />
        <p className="Footer__logo-slogan">seu mercado em um clique</p>
      </div>
      <div className="Footer__quick-link-container">
        <div className="Footer__menu">
          {menuItens.map((item) => (
            <a className="Footer__link" href={item.link}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="Footer__polices">
          <a className="Footer__link" href="home">
            Termos de uso
          </a>
          <a className="Footer__link" href="home">
            Politicas de privacidade
          </a>
        </div>
      </div>
      <div className="Footer__download-container">
        <a className="Footer__download-link" href="home">
          <img
            className="Footer__download-button"
            src={appStore}
            alt="Botão de download app store"
          />
        </a>
        <a className="Footer__download-link" href="home">
          <img
            className="Footer__download-button"
            src={googlePlay}
            alt="Botão de download google play"
          />
        </a>
      </div>
    </div>
    <div className="Footer__social-container">
      <SocialIcons
        className="Footer__social-icons"
        iconColor="white"
        iconSize={25}
      />
      <p className="Footer__copy">
        © Copyright 2020 smerca.com.br - All Rights Reserved
      </p>
    </div>
  </div>
);

export default Footer;
