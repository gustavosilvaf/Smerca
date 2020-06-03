import React from 'react';
import './styles.scss';

import { menuItens } from '../../utils/constants';

const TopMenu = () => (
  <div className="TopMenu">
    <img className="TopMenu__logo" src="" alt="logo" />
    <nav className="TopMenu__nav-container">
      {menuItens.map((item) => (
        <a className="TopMenu__item" href={item.link} key={item.name}>
          {item.name}
        </a>
      ))}
      <a className="TopMenu__button Button Button--white" href="/#">
        ENTRE EM CONTATO
      </a>
    </nav>
  </div>
);

export default TopMenu;
