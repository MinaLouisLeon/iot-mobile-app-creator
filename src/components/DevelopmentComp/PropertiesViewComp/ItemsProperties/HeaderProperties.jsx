import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonItemDivider,
} from "@ionic/react";
import {
  setHeaderMode,
  setIsHeaderEnabled,
  setHeaderTitle,
} from "../../../../Slices/gridItemsSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const HeaderProperties = () => {
  const dispatch = useDispatch(null);
  const headerMode = useSelector((state) => state.gridItemsSlice.headerMode);
  const [headerText, setHeaderText] = useState("");
  return (
    <>
      <IonItemDivider mode="md">Header</IonItemDivider>
      <IonItem lines="full">
        <IonLabel>Title :</IonLabel>
        <IonInput
          value={headerText}
          placeholder="Header Text Value"
          type="text"
          onIonChange={(e) => setHeaderText(e.detail.value)}
        />
      </IonItem>
      <IonItem lines="none">
          <IonButton onClick={() => dispatch(setHeaderTitle(headerText))}>
            save
          </IonButton>
      </IonItem>
    </>
  );
};

export default HeaderProperties;
