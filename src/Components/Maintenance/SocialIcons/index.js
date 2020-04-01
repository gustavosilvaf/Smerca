import React from 'react';

const SocialIcons = (props) => {
  return(
    <a href={props.link} class="social-icon">
        <i class={props.icon}></i>
		</a>
  );
}

export default SocialIcons;