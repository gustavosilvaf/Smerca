import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const CepInput = ({ direction = 'unset' }) => (
  <div className={`CepInput CepInput--${direction}`}>
    <input className="CepInput__cep-area" type="text" />
    <button type="button" className="CepInput__button Button Button--white">
      BUSCAR
    </button>
  </div>
);

CepInput.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default CepInput;
