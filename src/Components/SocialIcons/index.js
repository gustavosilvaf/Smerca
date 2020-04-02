import React from 'react';
import './styles.scss';

const SocialIcons = ({ socialMedias }) => (
    
    <div className="SocialIcons">
      { 
      socialMedias.map(item => (
        <a key={item.link} className="SocialIcons__icon" href={item.link}>
          {item.icon}
        </a>
      ))
      }
      
    </div>
  
  );
export default SocialIcons;

