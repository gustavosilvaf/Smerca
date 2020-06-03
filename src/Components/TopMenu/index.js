import React from 'react';
import './styles.scss';

import { menuItens } from '../../utils/constants';

const TopMenu = () => (
  <div className="topMenu">
    <img className="topMenu__logo" src="" alt="logo" />
    <nav className="topMenu__nav-container">
      {menuItens.map((item) => (
        <a className="topMenu__item" href={item.link} key={item.name}>
          {item.name}
        </a>
      ))}
      <a className="topMenu__button Button Button--white" href="/teste">
        ENTRE EM CONTATO
      </a>
    </nav>
  </div>
);

export default TopMenu;
