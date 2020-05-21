import React, { useState } from 'react';

import { useAlert } from 'react-alert';

import api from '../../Services/api';

import './styles.scss';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const alert = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      name,
    };

    try {
      await api.post('newsletter_subscriber', data);
      alert.success(`Email cadastrado, obrigado ${name}`);
    } catch (error) {
      const { errors } = error.response.data;
      errors.map((elementError) => alert.error(elementError));
    }
  };

  return (
    <form className="Newsletter" onSubmit={handleSubmit}>
      <label htmlFor="name" className="Newsletter__label flex">
        Gostaria de receber novidades em seu email?
        <input
          className="Newsletter__input Newsletter__input-first Newsletter__input-text"
          type="text"
          id="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <input
        className="Newsletter__input Newsletter__input-text"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seunome@dominio.com"
        required
      />
      <input
        className="Newsletter__input Newsletter__input-button"
        type="submit"
        value="Enviar"
      />
    </form>
  );
};

export default Newsletter;
