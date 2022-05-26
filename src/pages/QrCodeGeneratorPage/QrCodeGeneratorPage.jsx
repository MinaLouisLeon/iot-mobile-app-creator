import { IonContent, IonPage } from "@ionic/react";
import LoginComp from "../../components/LoginComp/LoginComp";
import HeaderComp from "../../components/HeaderComp/HeaderComp";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import QrCodeComp from "./../../components/QrCodeComp/QrCodeComp";
import MainAppSideMenu from "../../components/MainAppSideMenu/MainAppSideMenu";
const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const QrCodeGeneratorPage = () => {
  return (
    <IonPage>
      <MainAppSideMenu />
      <HeaderComp />
      <IonContent fullscreen id="home">
        <MainContainer>
          <div className="tc pa4 br2 shadow-1">
            <QrCodeComp />
          </div>
        </MainContainer>
      </IonContent>
    </IonPage>
  );
};

export default QrCodeGeneratorPage;
