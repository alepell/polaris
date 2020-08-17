import React from 'react';

import { Container, ModelBorder, TextContent, Button } from './styles';
import ModelPicture from '../../assets/images/model2.jpeg';
import ModelBg from '../../assets/images/modelbg.jpg';
function MainSection() {
  return (
    <Container>
      <img src={ModelBg} alt="" width={450} className="modelbg" />
      <ModelBorder>
        <img src={ModelPicture} alt="" width={400} />
      </ModelBorder>

      <TextContent>
        <h1>Bem-vinda</h1>
        <h2>Conheça a Polaris Boutique</h2>
        <p>
          É uma satisfaçāo receber você!
          <br />
          <br />
          Aqui na Polaris Boutique estaremos trazendo a vocês moda, conforto e
          qualidade, sintam-se a vontade para navegar em nossa vitrine no
          instagram e conhecer nossos produtos.
          <br />
          <br />
          Caso tenham alguma dúvida nos chame no direct ou diretamente em um dos
          nossos WhatsApp, estamos atendendo 24 horas e vamos adorar conversar
          com você, tirar suas dúvidas e saber a sua opiniāo !
        </p>
        <Button
          target="_blank"
          href="https://www.instagram.com/boutiquepolaris"
        >
          Confira nossa vitrine
        </Button>
      </TextContent>
    </Container>
  );
}

export default MainSection;
