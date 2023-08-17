import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Copyright from "../../ui/copyright/copyright";
import { FooterContainer, StyledFooter } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <Logo></Logo>
        <Copyright></Copyright>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
