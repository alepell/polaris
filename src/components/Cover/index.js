import React from 'react';

import { Container } from './styles';
import cover from '../../assets/images/cover.jpeg';

function Cover() {
  return (
    <Container>
      <img src={cover} alt="" />
      <p>"As mulheres são como as àguas, crescem quando se encontram."</p>
    </Container>
  );
}

export default Cover;
