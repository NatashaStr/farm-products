import React from "react";
import {
  StyledCard,
  CardContainer,
  CardImage,
  CardTitle,
  CardText,
  CardDescription
} from "./styles.js";

function Card({ image, title, text, description, isNegative }) {
  return (
    <StyledCard isNegative={isNegative}>
      <CardContainer>
        <CardImage src={image} alt={title} />
        <CardTitle isNegative={isNegative}>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardContainer>
      <CardDescription>{description}</CardDescription>
    </StyledCard>
  );
}

export default Card;
