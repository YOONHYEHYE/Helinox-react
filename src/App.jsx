import React from "react";
import styled from "styled-components";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import MainHome from "./page/main/MainHomePage";
import { mediaMax } from "./util/MediaQurey";
import Outdoor from "./page/outdoor/Outdoor";
import OutdoorChair from "./page/outdoor/OutdoorChairPage";
import OutdoorCort from "./page/outdoor/OutdoorCortPage";

function App() {
  window.alert(" 비상업적 용도로 만들어진 개인적인 포트폴리오 입니다.  (주)헬리녹스의 상표, 이미지, 지식재산권은 (주)헬리녹스가 보유하고 있습니다.");
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main>
          <Routes>
            <Route path="/Helinox-react" element={<MainHome />}></Route>
            <Route path="/Helinox-react/outdoor/*" element={<Outdoor />}></Route>
          </Routes>
        </Main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;

const Main = styled.main`
  margin-top: 100px;
  ${mediaMax.md} {
    margin-top: 60px;
  }
`;
