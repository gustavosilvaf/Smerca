import React, { useState } from 'react';
import './styles.scss'

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    
  }

  return(
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
  );
}

export default Newsletter;