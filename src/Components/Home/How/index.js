import React from 'react';
import './styles.scss';
import Step from '../../Step';
import stepOne from '../../../assets/images/vectors/stepone.svg';
import stepTwo from '../../../assets/images/vectors/steptwo.svg';
import stepThree from '../../../assets/images/vectors/stepthree.svg';
import stepFour from '../../../assets/images/vectors/stepfour.svg';

const How = () => (
  <div className="How">
    <div className="How__title-container">
      <h4 className="How__subtitle">FIQUE POR DENTRO</h4>
      <h3 className="How__title">COMO FUNCIONA</h3>
    </div>
    <div className="How__steps-container">
      <Step
        number="1"
        title="Escolha sua loja preferida"
        description="Compre dos melhores 
estabelecimentos da sua região"
        image={stepOne}
      />
      <Step
        number="2"
        title="Adicione produtos ao seu carrinho"
        description="Passeie pelos corredores ou
        busque por seus produtos favoritos"
        image={stepTwo}
      />
      <Step
        number="3"
        title="Seu companheiro shopper"
        description="Os shoppers são treinados para 
        escolher seus produtos com 
        carinho"
        image={stepThree}
      />
      <Step
        number="4"
        title="Seu tempo e felicidade
        Importam"
        description="Escolha o melhor horário para você e continuar fazendo o que te faz feliz enquanto cuidamos do seu pedido"
        image={stepFour}
      />
    </div>
  </div>
);

export default How;
