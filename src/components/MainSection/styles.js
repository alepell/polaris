import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  .modelbg {
    height: 600px;
    margin-top: 50px;
    @media (max-width: 411px) {
      width: 320px;
      height: 400px;
    }
    @media (max-width: 375px) {
      width: 320px;
      height: 400px;
    }
  }
  @media (max-width: 375px) {
  }
  max-width: 1360px;
  margin: 0 auto;
`;

export const ModelBorder = styled.div`
  background: #fff;
  width: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: absolute;
  border-radius: 4px;
  z-index: 10;
  top: 145px;
  left: 130px;
  @media (max-width: 411px) {
    width: 300px;
    top: 75px;
    left: 20px;
  }

  @media (max-width: 375px) {
    width: 300px;
    top: 75px;
    left: 20px;
  }

  img {
    height: 500px;
    @media (max-width: 411px) {
      width: 280px;
      height: 400px;
    }
    @media (max-width: 375px) {
      width: 280px;
      height: 400px;
    }
  }
`;

export const TextContent = styled.div`
  @media (max-width: 411px) {
    width: 395px;
    height: 395px;
    left: 2%;
    top: 120%;
  }
  @media (max-width: 375px) {
    width: 300px;
    height: 300px;
    left: 8%;
    top: 110%;
  }
  @media (max-width: 320px) {
    width: 300px;
    height: 300px;
    left: 2.5%;
    top: 110%;
  }
  display: flex;
  flex-direction: column;
  color: #303030;
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.045);
  border-radius: 50%;
  left: 52%;
  top: 20%;
  justify-content: center;
  align-items: center;

  h1 {
    @media (max-width: 411px) {
      font-size: 1.5rem;
    }
    @media (max-width: 375px) {
      font-size: 1.2rem;
    }
  }

  h2 {
    margin-top: 10px;
    @media (max-width: 375px) {
      font-size: 0.8rem;
    }
  }

  p {
    width: 400px;
    margin-top: 10px;
    text-align: center;
    @media (max-width: 411px) {
      font-size: 0.85rem;
      width: 290px;
    }
    @media (max-width: 375px) {
      font-size: 0.65rem;
      width: 260px;
    }
  }
`;

export const Button = styled.a`
  @media (max-width: 375px) {
    font-size: 0.65rem;
    padding: 5px;
  }
  margin-top: 15px;
  border: 3px solid #d6928f;
  background: #d6928f;

  padding: 10px;
  text-decoration: none;
  color: #fafafa;
  transition: all 0.2s;

  &:hover {
    opacity: 70%;
  }
`;
