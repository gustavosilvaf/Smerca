import React from 'react';

import { Provider } from "react-alert";
import { alertOptions } from '../../utils/constants';
import AlertTemplate from "react-alert-template-basic";

import Newsletter from '../../Components/Newsletter';

import { socialIcons } from '../../utils/constants'
import SocialIcons from '../../Components/SocialIcons';

import  './styles.scss'

const Maintenance = () => {
 
  const ICONS_COLOR = "#333";
  const ICONS_SIZE = "2.0em";

  return(
    <div className="Maitenance">
    <div className="Maitenance__logo flex flex--center">
      <img className="Maitenance__logo-image" src="./images/logo.svg" alt="Aqui está a logo"/>
    </div>
    <div className="Maitenance__main-box flex">
      <div className="Maitenance__left-box flex">
          <h1 className="Maitenance__left-box-title">Lamentamos o imprevisto, estamos em manutenção!</h1>
          <h2 className="Maitenance__left-box-subtitle">Atenciosamente,</h2>
          <h2 className="Maitenance__left-box-subtitle">Equipe <span className="Maitenance__left-box-contrast">sMerca</span>.</h2>
          
          <SocialIcons color="#333333" size="2em" socialMedias={socialIcons(ICONS_COLOR, ICONS_SIZE)}/>
        </div>
        <div className="Maitenance__right-box flex flex--all-center ">
          <img className="Maitenance__right-box-image"src="./images/maitenance.svg" alt="maintenance"/>
      </div>
      
    </div> 
  </div>
  )

}
  

export default Maintenance;