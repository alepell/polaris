import styled from 'styled-components';

export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fafafa;
  background-color: #2b4748;
  font-weight: 300;
  padding: 10px;
  z-index: 12;
  @media (max-width: 411px) {
    font-size: 0.6rem;
  }
  @media (max-width: 375px) {
    font-size: 0.6rem;
  }
`;

export const InstagramLink = styled.a`
  font-weight: 700;
  color: #d4908f;
  text-decoration: none;
  margin-left: 5px;
  display: flex;
  img {
    margin-left: 5px;
    @media (max-width: 411px) {
      margin-top: -3px;
    }
    @media (max-width: 375px) {
      margin-top: -3px;
    }
  }
  @media (max-width: 411px) {
    margin-top: 9px;
  }
  @media (max-width: 375px) {
    margin-top: 9px;
  }
`;
