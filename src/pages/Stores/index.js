import React from 'react';
import './styles.scss';

import TopMenu from '../../Components/TopMenu';
import SearchContainer from '../../Components/Stores/SearchContainer';

const Stores = () => (
  <>
    <TopMenu color="green" />
    <SearchContainer />
  </>
);

export default Stores;
