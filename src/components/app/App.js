import PageWrapper from "../layout/page-wrapper/page-wrapper";
import advantagesList from "../../mocks/advantagesList";
import { GlobalStyle } from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper advantages={advantagesList} />
    </>
  );
}
