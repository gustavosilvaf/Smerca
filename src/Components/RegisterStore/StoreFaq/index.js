import React, { useEffect, useState } from 'react';
import './styles.scss';
import api from '../../../Services/api';
import Faq from '../../Faq';
import Footer from '../../Footer';

const StoresFaq = () => {
  const [faqs, setFaqs] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const faqResponse = await api.get('faq');
      const { faq } = faqResponse.data;
      setFaqs(faq);
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="StoresFaq">
        <h4 className="StoresFaq__subtitle">ESTÁ COM DÚVIDA?</h4>
        <h3 className="StoresFaq__title">PERGUNTAS FREQUENTES</h3>
        <div className="StoresFaq__main-container">
          <Faq
            title="O que é um marketplace"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum earum voluptatem iure incidunt magni fugiat, doloremque omnis blanditiis quis facere autem provident. At laboriosam, rerum perspiciatis debitis fugit tempora?"
          />
          <Faq
            title="O que é um marketplace"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum earum voluptatem iure incidunt magni fugiat, doloremque omnis blanditiis quis facere autem provident. At laboriosam, rerum perspiciatis debitis fugit tempora?"
          />
          <Faq
            title="O que é um marketplace"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum earum voluptatem iure incidunt magni fugiat, doloremque omnis blanditiis quis facere autem provident. At laboriosam, rerum perspiciatis debitis fugit tempora?"
          />
          <Faq
            title="O que é um marketplace"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam eum earum voluptatem iure incidunt magni fugiat, doloremque omnis blanditiis quis facere autem provident. At laboriosam, rerum perspiciatis debitis fugit tempora?"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StoresFaq;
