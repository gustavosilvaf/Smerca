import React, { useState, useRef } from 'react';
import './styles.scss';

const Faq = ({ title, description }) => {
  const [status, setStatus] = useState(false);
  const [height, setHeight] = useState('0px');

  const content = useRef(null);

  const handleSubmit = () => {
    setStatus(!status);
    setHeight(status ? '0px' : `${content.current.scrollHeight}px`);
  };

  return (
    <div className="Faq">
      <button
        type="button"
        onClick={handleSubmit}
        className={`Faq__accordion ${status ? 'Faq__accordion--active' : ''}`}
      >
        {title}
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={`Faq__description-container${status ? '--active' : ''}`}
      >
        <p className="Faq__description">{description}</p>
      </div>
    </div>
  );
};

export default Faq;
