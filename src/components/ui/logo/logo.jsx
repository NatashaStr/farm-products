import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogoLink, LogoText } from "./styles";

function Logo() {
  return (
    <StyledLogoLink href="#">
      <LogoImage alt="Логотип компании."></LogoImage>
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogoLink>
  );
}

export default Logo;
