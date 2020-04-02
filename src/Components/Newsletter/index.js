import React from 'react';
import './styles.scss'

const Newsletter = () => {
  return(
    <form action="">
      <label htmlFor="newsLetterEmail">Gostaria de receber novidades em seu email?</label>
      <input type="text" placeholder="Name" name="name" required />
      <input type="email" name="newsLetterEmail" placeholder="email@dominio.com" required/>
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default Newsletter;