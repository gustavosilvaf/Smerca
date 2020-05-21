import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const SocialIcons = ({ socialMedias }) => (
  <div className="SocialIcons">
    {socialMedias.map((item) => (
      <a key={item.link} className="SocialIcons__icon" href={item.link}>
        {item.icon}
      </a>
    ))}
  </div>
);

SocialIcons.propTypes = {
  socialMedias: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SocialIcons;
