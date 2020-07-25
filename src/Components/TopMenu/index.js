import React, { useState } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import greenLogo from '../../assets/images/green-logo.svg';

import menuButton from '../../assets/images/icons/menu-icon.png';

import { menuItens } from '../../utils/constants';

const TopMenu = ({ color = 'white' }) => {
  const [menuStats, setMenuStats] = useState(false);

  const handleClick = () => setMenuStats(!menuStats);

  return (
    <div className={`TopMenu TopMenu--${color}`}>
      <img
        className="TopMenu__menu-button"
        onClick={handleClick}
        onKeyDown={handleClick}
        alt="menu-button"
        src={menuButton}
      />
      <img className="TopMenu__logo" src={greenLogo} alt="logo" />
      <nav className={`TopMenu__nav-container${menuStats ? '' : '--inactive'}`}>
        {menuItens.map((item) => (
          <Link className="TopMenu__item" to={item.link} key={item.name}>
            {item.name}
          </Link>
        ))}
        <a className="TopMenu__button Button Button--white" href="/#">
          ENTRE EM CONTATO
        </a>
      </nav>
    </div>
  );
};

TopMenu.propTypes = {
  color: PropTypes.string.isRequired,
};

export default TopMenu;
