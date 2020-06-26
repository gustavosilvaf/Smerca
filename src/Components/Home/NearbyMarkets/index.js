import React from 'react';
import './styles.scss';
import CepInput from '../../CepInput';

const NearbyMarkets = () => (
  <div className="NearbyMarkets">
    <div className="NearbyMarkets__text-container">
      <h2 className="NearbyMarkets__center-text">
        Compre dos melhores estabelecimentos da sua região
      </h2>
    </div>
    <CepInput direction="center" />
  </div>
);

export default NearbyMarkets;
