import React from "react";
import {
  ContainedButton,
  FooterStyled,
  Banner,
  BannerSubtitle,
  BannerTitle,
} from "./styled";

function Footer() {
  return (
    <FooterStyled>
      <Banner>
        <div>
          <BannerTitle variant="h5">Venda en linea hoy</BannerTitle>
          <BannerSubtitle variant="subtitle1">
            Toma 5 minutos comience gratis
          </BannerSubtitle>
        </div>
        <ContainedButton variant="outlined">Crear mi tienda</ContainedButton>
      </Banner>
    </FooterStyled>
  );
}

export default Footer;
