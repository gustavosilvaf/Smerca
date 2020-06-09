import React, { useState } from 'react';
import './styles.scss';

import logoWhite from '../../assets/images/logo.svg';
import menuButton from '../../assets/images/icons/menu-icon.png';

import { menuItens } from '../../utils/constants';

const TopMenu = () => {
  const [menuStats, setMenuStats] = useState(false);

  const handleClick = () => setMenuStats(!menuStats);

  return (
    <div className="TopMenu">
      <img
        className="TopMenu__menu-button"
        onClick={handleClick}
        onKeyDown={handleClick}
        alt="menu-button"
        src={menuButton}
      />
      <img className="TopMenu__logo" src={logoWhite} alt="logo" />
      <nav className={`TopMenu__nav-container${menuStats ? '' : '--inactive'}`}>
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
};

export default TopMenu;
