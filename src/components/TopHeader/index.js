import React from 'react';
import { TopBar, InstagramLink } from './styles';
import InstaLogo from '../../assets/images/instagram.svg';

function TopHeader() {
  return (
    <TopBar>
      <p>Em breve nossa loja virtual |</p>
      <InstagramLink
        target="_blank"
        href="https://www.instagram.com/boutiquepolaris"
      >
        Compras pelo nosso insta
        <img src={InstaLogo} alt="Logo Instagram" width={20} />
      </InstagramLink>
    </TopBar>
  );
}

export default TopHeader;
