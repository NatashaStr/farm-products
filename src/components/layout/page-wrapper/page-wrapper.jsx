import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import { StyledPageWrapper } from "./styles";

function PageWrapper({ advantages }) {
  return (
    <StyledPageWrapper>
      <Header />
      <main>
        <MainPage advantages={advantages} />
      </main>
      <Footer />
    </StyledPageWrapper>
  );
}

export default PageWrapper;
