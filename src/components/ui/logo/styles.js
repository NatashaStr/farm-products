import styled from "styled-components";

export const StyledLogoLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: ${(props) => props.theme.colorBlackForText};
  text-decoration: none;
`;

export const LogoText = styled.span`
  margin-left: 28px;
`;
