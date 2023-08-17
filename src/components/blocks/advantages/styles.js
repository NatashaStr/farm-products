import styled from "styled-components";
import { Container, Ul, Li } from "/src/components/styled";

export const StyledAdvantages = styled.section`
  padding: 100px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const AdvantagesContainer = styled(Container)``;

export const AdvantagesList = styled(Ul)`
  margin: 64px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const AdvantagesItem = styled(Li)`
  min-height: 197px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
