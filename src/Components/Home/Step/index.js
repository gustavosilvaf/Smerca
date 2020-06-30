import React from 'react';
import './styles.scss';

const Step = ({ number, title, description, image }) => (
  <div className="Step">
    <h3 className="Step__number">{number}</h3>
    <div className="Step__content">
      <div className="Step__image-container">
        <img className="Step__image" src={image} alt={title} />
      </div>
      <h6 className="Step__title">{title}</h6>
      <p className="Step__description">{description}</p>
    </div>
  </div>
);

export default Step;
