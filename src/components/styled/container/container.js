import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.pageWidth};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
`;

export default Container;
