import React from 'react';
import './styles.scss';

import { menuItens } from '../../utils/constants';

const TopMenu = () => (
  <div className="TopMenu">
    <div className="TopMenu__logoPlace">
      <img className="TopMenu__logoPace__logo" src="" alt="logo" />
    </div>
    <nav className="TopMenu__menuItens">
      {menuItens.map((item) => (
        <a
          className="TopMenu__menuItens__item"
          href={item.link}
          key={item.name}
        >
          {item.name}
        </a>
      ))}
      <a
        className="TopMenu__menuItens__button Button Button--white"
        href="/teste"
      >
        ENTRE EM CONTATO
      </a>
    </nav>
  </div>
);

export default TopMenu;
