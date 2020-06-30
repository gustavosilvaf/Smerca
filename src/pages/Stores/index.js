import React from 'react';
import './styles.scss';

import TopMenu from '../../Components/TopMenu';
import SearchContainer from '../../Components/Stores/SearchContainer';
import StoresByTag from '../../Components/Stores/StoresByTag';

const Stores = () => (
  <>
    <TopMenu color="green" />
    <SearchContainer />
    <StoresByTag />
  </>
);

export default Stores;
