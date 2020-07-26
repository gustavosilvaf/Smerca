import React from 'react';
import './styles.scss';
import Step from '../../Step';
import StepOneStore from '../../../assets/images/vectors/steponestore.svg';
import StepTwoStore from '../../../assets/images/vectors/steptwostore.svg';
import StepThreeStore from '../../../assets/images/vectors/stepthreestore.svg';
import StepFourStore from '../../../assets/images/vectors/stepfourstore.svg';

const HowWork = () => (
  <div className="HowWork">
    <h3 className="HowWork__title">Como funciona para sua empresa</h3>
    <p className="HowWork__description">
      Seremos uma equipe, nada de taxas ocultas, abusivas, cobrancças indevidas
      e mensalidades. Só recebemos se você receber muito mais!!
    </p>
    <div className="HowWork__steps-container">
      <Step number="1" title="Sistema de gestão integrado" image={StepOneStore} color='green' />
      <Step number="2" title="Escolha onde atuar" image={StepTwoStore}  color='green'/>
      <Step number="3" title="Aumente sua visibilidade" image={StepThreeStore}  color='green'/>
      <Step number="4" title="Potencialize seu faturamento" image={StepFourStore}  color='green'/>
    </div>
  </div>
);

export default HowWork;
