import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { positions } from 'react-alert';

export const socialIcons = (iconColor, iconSize) => [
  {
    link: 'a',
    icon: <FaFacebook color={iconColor} size={iconSize} />,
  },
  {
    link: 'b',
    icon: <FaTwitter color={iconColor} size={iconSize} />,
  },
  {
    link: 'c',
    icon: <FaInstagram color={iconColor} size={iconSize} />,
  },
];

export const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
};
