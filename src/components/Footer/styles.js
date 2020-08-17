import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 375px) {
    font-size: 1rem;
    padding: 10px;
    font-size: 0.65rem;
  }
  display: flex;
  padding: 20px;
  background-color: #2b4748;
  justify-content: center;
  align-items: center;
  color: #fafafa;
  font-weight: 300;
  a {
    text-decoration: none;
    color: #fafafa;
    font-weight: 600;
  }
`;
