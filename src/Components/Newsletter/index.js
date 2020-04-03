import React, { useState } from 'react';
import './styles.scss';
import { Provider } from "react-alert";

import { useAlert } from "react-alert";
import api from '../../Services/api';
import { alertOptions } from '../../utils/constants';
import AlertTemplate from "react-alert-template-basic";


const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const alert = useAlert();

  const handleSubmit = async e => {
    e.preventDefault();
  
    const data = {
      email,
      name
    }

    try {
      await api.post('newsletter_subscriber', data);
      alert.success(`Email cadastrado, obrigado ${name}`);
    } catch (error) {
      alert.error(`Falha no cadastro do email, avise-nos em uma rede social!`);
    }
  
      
  }

  return(
    <Provider template={AlertTemplate} {...alertOptions}>

    <form className="Newsletter" onSubmit={handleSubmit}>
      <label className="Newsletter__label flex">Gostaria de receber novidades em seu email?</label>
      <input 
        className="Newsletter__input Newsletter__input-first Newsletter__input-text"
        type="text" 
        placeholder="Nome" 
        value={name} 
        onChange={e => 
        setName(e.target.value)} 
        required />

      <input 
        className="Newsletter__input Newsletter__input-text"
        type="email" 
        value={email}
        onChange= {e => setEmail(e.target.value)}
        placeholder="seunome@dominio.com" 
        required/>
      <input className="Newsletter__input Newsletter__input-button" type="submit" value="Enviar" />
    </form>
    </Provider>
  );
}

export default Newsletter;