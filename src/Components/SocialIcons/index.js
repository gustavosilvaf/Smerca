import React from 'react';
import './styles.scss';
import { socialIcons } from '../../utils/constants';

const SocialIcons = ({ iconColor, iconSize }) => (
  <div className="SocialIcons">
    {socialIcons(iconColor, iconSize).map((item) => (
      <a key={item.link} className="SocialIcons__icon" href={item.link}>
        {item.icon}
      </a>
    ))}
  </div>
);

export default SocialIcons;
