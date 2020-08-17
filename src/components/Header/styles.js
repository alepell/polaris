import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const LogoPolaris = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  h1 {
    font-family: 'Cinzel';
    color: #262626;
    font-size: 5rem;
    @media (max-width: 375px) {
      font-size: 2.5rem;
    }
  }

  small {
    font-family: 'Raleway';
    font-size: 1.9rem;
    margin-top: -10px;
    @media (max-width: 375px) {
      font-size: 1rem;
    }
  }
`;
