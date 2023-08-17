import styled from "styled-components";
import { Container } from "/src/components/styled";

export const StyledAbout = styled.section`
  background: ${(props) => props.theme.colorForBackground};
  padding-top: 57px;
`;

export const AboutContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 446px;
  align-items: center;
`;

export const AboutImageWrapper = styled.div`
  position: relative;
  justify-self: end;
  /* background-image: url("../../../assets/blue-circle.svg"); */

  /* &::after {
    position: absolute;
    content: "";
    width: 446px;
    height: 446px;
    right: 0;
    top: 50%;
    border-radius: 50%;
    background: red;
    z-index: 0;
  } */
`;
