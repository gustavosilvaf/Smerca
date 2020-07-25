import React from 'react';
import './styles.scss';
import Header from '../../Components/RegisterStore/Header';
import HowWork from '../../Components/RegisterStore/HowWork';
import StoresFaq from '../../Components/RegisterStore/StoreFaq';

const RegisterStore = () => (
  <div className="RegisterStore">
    <Header />
    <HowWork />
    <StoresFaq />
  </div>
);

export default RegisterStore;
