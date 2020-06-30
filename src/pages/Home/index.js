import React from 'react';
import './styles.scss';
import TopMenu from '../../Components/TopMenu';
import NearbyMarkets from '../../Components/Home/NearbyMarkets';
import Footer from '../../Components/Footer';
import About from '../../Components/Home/About';
import How from '../../Components/Home/How';

const Home = () => (
  <div className="Home">
    <TopMenu color="white" />
    <NearbyMarkets />
    <About />
    <How />
    <Footer />
  </div>
);

export default Home;
