import React from "react";
import { ReactComponent as AboutImage } from "/src/assets/farmer.svg";
import { StyledAbout, AboutContainer, AboutImageWrapper } from "./styles";
import Title, { TitleSize } from "../../ui/title/title";

function About() {
  return (
    <StyledAbout>
      <AboutContainer>
        <div className="about__text-wrapper">
          <Title size={TitleSize.BIG}>
            Магазин фермерских продуктов с доставкой
          </Title>
          <p className="about__text">
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </p>
        </div>
        <AboutImageWrapper>
          <AboutImage alt="Рисунок фермера." />
        </AboutImageWrapper>
      </AboutContainer>
    </StyledAbout>
  );
}

export default About;
