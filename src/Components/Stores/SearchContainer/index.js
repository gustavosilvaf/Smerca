import React from 'react';
import './styles.scss';
import bag from '../../../assets/images/vectors/bag.svg';

import CepInput from '../../CepInput';

const SearchContainer = () => (
  <div className="SearchContainer">
    <div className="SearchContainer__cep-container">
      <h1 className="SearchContainer__title">LOJAS</h1>
      <h3 className="SearchContainer__subtitle">PROCURE POR UM NOVO CEP</h3>
      <CepInput />
    </div>
    <div className="SearchContainer__image-container">
      <img
        className="SearchContainer__image"
        src={bag}
        alt="Sacola de comida"
      />
    </div>
    <div className="SearchContainer__search-result" />
  </div>
);

export default SearchContainer;
