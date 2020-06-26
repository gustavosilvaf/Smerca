import React from 'react';
import './styles.scss';
import TopMenu from '../../Components/TopMenu';
import NearbyMarkets from '../../Components/Home/NearbyMarkets';

const Home = () => (
  <div className="Home">
    <TopMenu color="white" />
    <NearbyMarkets />
  </div>
);

export default Home;
