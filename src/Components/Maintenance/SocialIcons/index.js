import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMailBulk } from 'react-icons/fa'
import './styles.scss';

const SocialIcons = (props) => {
  return(
    <div id="social-icons">
      <a href="https://www.google.com/search?q=suaviza%C3%A7%C3%A3o+keyframe+css&oq=suaviza%C3%A7%C3%A3o+keyframe+css&aqs=chrome..69i57.4768j0j7&sourceid=chrome&ie=UTF-8">
        <FaFacebook color={props.color} size={props.size}  />
      </a>
      <a href="https://www.google.com/search?q=suaviza%C3%A7%C3%A3o+keyframe+css&oq=suaviza%C3%A7%C3%A3o+keyframe+css&aqs=chrome..69i57.4768j0j7&sourceid=chrome&ie=UTF-8">
        <FaInstagram color={props.color} size={props.size}/>
      </a>
      <a href="https://www.google.com/search?q=suaviza%C3%A7%C3%A3o+keyframe+css&oq=suaviza%C3%A7%C3%A3o+keyframe+css&aqs=chrome..69i57.4768j0j7&sourceid=chrome&ie=UTF-8">
        <FaTwitter color={props.color} size={props.size}/>
      </a>
      <a href="https://www.google.com/search?q=suaviza%C3%A7%C3%A3o+keyframe+css&oq=suaviza%C3%A7%C3%A3o+keyframe+css&aqs=chrome..69i57.4768j0j7&sourceid=chrome&ie=UTF-8">
        <FaYoutube color={props.color} size={props.size}/>
      </a>
      <a href="https://www.google.com/search?q=suaviza%C3%A7%C3%A3o+keyframe+css&oq=suaviza%C3%A7%C3%A3o+keyframe+css&aqs=chrome..69i57.4768j0j7&sourceid=chrome&ie=UTF-8">
        <FaMailBulk color={props.color} size={props.size}/>
      </a>
      
    </div>
  
  
  );
}

export default SocialIcons;

