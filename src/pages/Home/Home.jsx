import { IonPage, IonButton, IonContent, IonPopover } from "@ionic/react";
import MainAppSideMenu from "../../components/MainAppSideMenu/MainAppSideMenu";
import LoginComp from "../../components/LoginComp/LoginComp";
import HeaderComp from "../../components/HeaderComp/HeaderComp";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setAppMode } from "../../Slices/creatorViewSlice";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const Home = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IonPage>
      <MainAppSideMenu />
      <HeaderComp setIsOpen={setIsOpen} />
      <IonContent fullscreen id="home">
        <IonPopover isOpen={isOpen} onDidDismiss={() => setIsOpen(false)}>
          <IonContent>
            <LoginComp setIsOpen={setIsOpen} />
          </IonContent>
        </IonPopover>
        <MainContainer>
          <div className="shadow-1 pa4 ma2 br2">
            <p>
              <span className="fw6">Iot Mobile App Creator</span> is a project
              to create mobile UI for Iot applications based on esp8266.
            </p>
            <ol>
              <li>
                <span className="blue underline pointer">Usage</span>
              </li>
              <li>
                <span className="blue underline pointer">
                  Preparing esp8266
                </span>
              </li>
              <li>
                <span className="blue underline pointer">Run Mobile App</span>
              </li>
            </ol>
            <div className="tc">
              <IonButton onClick={() => dispatch(setAppMode("CreatorPage"))}>
                Start Building New App
              </IonButton>
            </div>
          </div>
        </MainContainer>
      </IonContent>
    </IonPage>
  );
};

export default Home;
