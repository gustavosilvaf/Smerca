import React from 'react';
import './styles.scss';
import TopMenu from '../../Components/TopMenu';
import NearbyMarkets from '../../Components/Home/NearbyMarkets';
import Footer from '../../Components/Footer';

const Home = () => (
  <div className="Home">
    <TopMenu color="white" />
    <NearbyMarkets />
    <Footer />
  </div>
);

export default Home;
