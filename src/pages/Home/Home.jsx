import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonPopover,
  } from "@ionic/react";
  import MainAppSideMenu from "../../components/MainAppSideMenu/MainAppSideMenu";
  import LoginComp from "../../components/LoginComp/LoginComp";
  import DevelopmentComp from '../../components/DevelopmentComp/DevelopmentComp';
  import MobileScreenComp from '../../components/MobileScreenComp/MobileScreenComp';
  import { useState } from "react";
  const Home = () => {
    const [isSignedInValue, setIsSignedInValue] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    console.log(isSignedInValue);
    return (
      <IonPage>
        <MainAppSideMenu />
        <IonHeader>
          <IonToolbar mode="ios">
            <IonMenuButton slot="start" />
            <IonTitle>IOT Mobile App Creator</IonTitle>
            <IonButtons slot="end">
              {!isSignedInValue && (
                <IonButton onClick={() => setIsOpen(true)}>Login</IonButton>
              )}
              {isSignedInValue && (
                <IonButton onClick={() => setIsOpen(true)} color="danger">
                  Logout
                </IonButton>
              )}
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen id="home">
          <IonPopover isOpen={isOpen}
            onDidDismiss={() => setIsOpen(false)}
          >
            <IonContent>
              <LoginComp setIsSignedInValue={setIsSignedInValue} setIsOpen={setIsOpen} />
            </IonContent>
          </IonPopover>
          <DevelopmentComp>
            <MobileScreenComp />
          </DevelopmentComp>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;
  