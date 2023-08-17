import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import Button from "../../ui/button/button";
import { HeaderContainer, StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <Nav />
        <Button />
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
