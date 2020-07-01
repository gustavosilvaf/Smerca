import React from 'react';
import './styles.scss';
import Step from '../../Step';
import StepOneStore from '../../../assets/images/vectors/steponestore.svg';
import StepTwoStore from '../../../assets/images/vectors/steptwostore.svg';
import StepThreeStore from '../../../assets/images/vectors/stepthreestore.svg';
import StepFourStore from '../../../assets/images/vectors/stepfourstore.svg';


const HowWork = () => <div className="HowWork">
  <h3 className="HowWork__title">Como funciona para sua empresa</h3>
  <p className="HowWork__description">
  Seremos uma equipe, nada de taxas ocultas, abusivas,  cobrancças indevidas e mensalidades. 
Só recebemos se você receber muito mais!!
  </p>
  <div className="HowWork__steps-container">
    <Step title="Sistema de gestão integrado" image={StepOneStore}/>
    <Step title="Escolha onde atuar" image={StepTwoStore}/>
    <Step title="Aumente sua visibilidade" image={StepThreeStore}/>
    <Step title="Potencialize seu faturamento" image={StepFourStore}/>

  </div>
</div>

export default HowWork;
