import styled from "styled-components";
//import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

const MainSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px 40px;
`

function App() {
  return (
    <main>
      <Header />
      <MainSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </MainSection>
    </main>
  );
}

export default App;
