import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


export const socialIcons = (iconColor, iconSize) => [{
  link: "a",
  icon: <FaFacebook color={iconColor} size={iconSize} />
},
{
  link: "a",
  icon: <FaTwitter color={iconColor} size={iconSize} />
},
{
  link: "a",
  icon: <FaInstagram color={iconColor} size={iconSize} />
}
]; 