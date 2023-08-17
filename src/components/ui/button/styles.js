import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  color: ${(props) => props.theme.colorWhite};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 150%;
  font-weight: bold;
  padding: 16px 97px;
  background-color: ${(props) => props.theme.colorForButton};
`;
