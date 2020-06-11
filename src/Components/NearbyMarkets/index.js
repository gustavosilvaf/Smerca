import React from 'react';
import './styles.scss';

const NearbyMarkets = () => (
  <div className="NearbyMarkets">
    <div className="NearbyMarkets__text-container">
      <h2 className="NearbyMarkets__center-text">
        Compre dos melhores estabelecimentos da sua região
      </h2>
    </div>
    <div className="NearbyMarkets__input-area">
      <input className="NearbyMarkets__input-cep" type="text" />
      <button
        type="button"
        className="NearbyMarkets__button Button Button--white"
      >
        BUSCAR
      </button>
    </div>
  </div>
);

export default NearbyMarkets;
