import {
    IonContent,
    IonPage,
    IonPopover,
  } from "@ionic/react";
  import HeaderComp from "../../components/HeaderComp/HeaderComp";
  import MainAppSideMenu from "../../components/MainAppSideMenu/MainAppSideMenu";
  import LoginComp from "../../components/LoginComp/LoginComp";
  import DevelopmentComp from '../../components/DevelopmentComp/DevelopmentComp';
  import MobileScreenContentComp from "../../components/MobileScreenContentComp/MobileScreenContentComp";
  import { useState } from "react";
  const CreatorPage = () => {
    const [isSignedInValue, setIsSignedInValue] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    console.log(isSignedInValue);
    return (
      <IonPage>
        <MainAppSideMenu />
        <HeaderComp isSignedInValue={isSignedInValue} setIsOpen={setIsOpen} />
        <IonContent fullscreen id="home">
          <IonPopover isOpen={isOpen}
            onDidDismiss={() => setIsOpen(false)}
          >
            <IonContent>
              <LoginComp setIsSignedInValue={setIsSignedInValue} setIsOpen={setIsOpen} />
            </IonContent>
          </IonPopover>
          <DevelopmentComp>
            {/* <MobileScreenComp /> */}
            <MobileScreenContentComp/>
          </DevelopmentComp>
        </IonContent>
      </IonPage>
    );
  };
  
  export default CreatorPage;
  