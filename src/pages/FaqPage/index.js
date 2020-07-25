import React from 'react';
import './styles.scss';
import TopMenu from '../../Components/TopMenu';
import Footer from '../../Components/Footer';
import menInDoubt from '../../assets/images/doubt.png'
import Faq from '../../Components/Faq';

const FaqPage = () => <> 
    <TopMenu color="green"/>
    <div className="FaqPage">
      <div className="FaqPage__first-container">
        <div className="FaqPage__text-container">
          <h4 className="FaqPage__subtitle">ESTÁ COM DÚVIDA?</h4>
          <h3 className="FaqPage__title">PERGUNTAS FREQUENTES</h3>
        </div>
        <div className="FaqPage__image-container">
          <img className="FaqPage__image" src={menInDoubt} alt="Homem em dúvida"/>
        </div>
      </div>
      <div className="FaqPage__faq-container">
        <Faq title="teste" description="teste"/>
        <Faq title="teste" description="teste"/>
        <Faq title="teste" description="teste"/>
        <Faq title="teste" description="teste"/>

      </div>
    </div>
    <Footer />
</>

export default FaqPage;