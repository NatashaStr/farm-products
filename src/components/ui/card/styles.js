import styled from "styled-components";

export const StyledCard = styled.div`
  background: ${(props) =>
    props.isNegative
      ? props.theme.colorForGarbageBackground
      : props.theme.colorForEcoBackground};
  padding: ${(props) => props.theme.indent};
  height: 100%;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr;
  column-gap: ${(props) => props.theme.indent};
  margin-bottom: ${(props) => props.theme.indent};
`;

export const CardImage = styled.img`
  grid-row: 1 / 3;
`;

export const CardTitle = styled.span`
  margin: 0;
  padding: 0;
  padding: 2px 10px;
  place-self: start;

  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.colorWhite};
  background: ${(props) =>
    props.isNegative ? props.theme.colorRed : props.theme.colorGreen};
`;

export const CardText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
`;

export const CardDescription = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 150%;
`;
