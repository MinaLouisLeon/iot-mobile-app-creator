import {
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonTitle,
  IonButtons,
  IonButton,
} from "@ionic/react";
import { useSelector } from "react-redux";
const HeaderComp = ({setIsOpen}) => {
    const isSignedInValue = useSelector((state) => state.userInfoSlice.isSignedInValue);
  return (
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
  );
};

export default HeaderComp;
