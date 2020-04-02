import React from 'react';
import  './styles.scss'
import SocialIcons from '../../Components/Maintenance/SocialIcons';
import Newsletter from '../../Components/Newsletter';

const Maintenance = () => {


  return (
    <div id="box">
      <div className="maintenance-container">
        <div id="logo">
          <img src="./images/logo.svg" alt=""/>
        </div>
        
        <div id="container-box">
          <div className="text-area">
            <h1 className="title">Lamentamos o imprevisto, estamos em manutenção!</h1>
            <h2>Atenciosamente,</h2>
            <h2>Equipe <span>sMerca</span>.</h2>
            <Newsletter />
            <SocialIcons color="#333333" size="2em"/>
          </div>
          <div >
            <img id="maitenance-vector"src="./images/maitenance.svg" alt="maintenance"/>
          </div>
          
        </div>
        
      </div> 
    </div>
         
  );
}

export default Maintenance;