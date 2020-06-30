import React from 'react';
import './styles.scss';

const CepInput = ({ direction = 'unset' }) => (
  <div className={`CepInput CepInput--${direction}`}>
    <input className="CepInput__cep-area" type="text" />
    <button type="button" className="CepInput__button Button Button--white">
      BUSCAR
    </button>
  </div>
);

export default CepInput;
