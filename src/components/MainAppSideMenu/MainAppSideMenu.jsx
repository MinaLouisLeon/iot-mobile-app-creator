import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { exportApp } from "../../Firebase/Firestore";
import { useSelector, useDispatch } from "react-redux";
import { generateQrCode ,setAppMode} from "../../Slices/creatorViewSlice";

const MainAppSideMenu = () => {
  const dispatch = useDispatch(null);
  const uid = useSelector((state) => state.userInfoSlice.userInfo.uid);
  const gridItemsSlice = useSelector((state) => state.gridItemsSlice);
  const appMode = useSelector((state) => state.creatorViewSlice.appMode);
  const handleExport = async () => {
    if (uid !== "") {
      let res = await exportApp(uid, gridItemsSlice);
      if (res) {
        dispatch(
          generateQrCode({
            qrValue: uid,
            appMode: "QrCodeGeneratorPage",
          })
        );
        console.log("done");
      } else {
        console.log("failed");
      }
    } else {
      console.log("need to login");
    }
  };
  const handleListItems = () => {
    switch (appMode) {
      case "QrCodeGeneratorPage" :
        return(
          <>
            <IonItem>
            New App
            </IonItem>
            {/* TODO add back to creator view */}
            {/* <IonItem button onClick={() => dispatch(setAppMode("CreatorPage"))}>
              Back to Creator View
            </IonItem> */}
          </>
        )
      default:
        return (
          <>
            {/* <IonItem>New App</IonItem>
            <IonItem>Open App</IonItem>
            <IonItem>Save App</IonItem> */}
            <IonItem button color="success" onClick={() => handleExport()}>
              Create App QR Code
            </IonItem>
          </>
        );
    }
  };
  return (
    <IonMenu contentId="home" mode="ios">
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>{handleListItems()}</IonList>
      </IonContent>
    </IonMenu>
  );
};

export default MainAppSideMenu;
