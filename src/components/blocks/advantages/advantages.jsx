import React from "react";
import Title from "../../ui/title/title";
import Card from "../../ui/card/card";
import Button from "../../ui/button/button";
import {
  StyledAdvantages,
  AdvantagesContainer,
  AdvantagesList,
  AdvantagesItem,
  ButtonWrapper
} from "./styles.js";

function Advantages({ advantages }) {
  return (
    <StyledAdvantages>
      {advantages.length ? (
        <AdvantagesContainer>
          <Title>Почему фермерские продукты лучше?</Title>
          <AdvantagesList>
            {advantages.map((advantage) => (
              <AdvantagesItem key={advantage.id}>
                <Card {...advantage} />
              </AdvantagesItem>
            ))}
          </AdvantagesList>
          <ButtonWrapper>
            <Button />
          </ButtonWrapper>
        </AdvantagesContainer>
      ) : null}
    </StyledAdvantages>
  );
}

export default Advantages;
