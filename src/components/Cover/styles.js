import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 411px) {
    margin-top: 550px;
  }
  @media (max-width: 375px) {
    margin-top: 350px;
  }
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    opacity: 40%;
  }

  p {
    position: absolute;
    font-family: 'Raleway';
    font-size: 2.5rem;
    max-width: 600px;
    text-align: center;
    color: #353535;
    @media (max-width: 411px) {
      font-size: 1.3rem;
    }
    @media (max-width: 375px) {
      font-size: 1rem;
    }
  }
`;
