import {
  IonItemDivider,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {setButtonProp} from '../../../../Slices/gridItemsSlice';
import {setPropertiesItemKey} from '../../../../Slices/creatorViewSlice';
const ButtonProperties = ({buttonKey}) => {
  const dispatch = useDispatch(null);
  const buttons = useSelector((state) => state.gridItemsSlice.buttons);
  const [textValue, setTextValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const handleSave = () => {
    dispatch(setButtonProp({
      name : textValue,
      color : colorValue,
      key : buttonKey
    }));
    dispatch(setPropertiesItemKey(""));
  }
  return (
    <>
      <IonItemDivider mode="md">Button</IonItemDivider>
      <IonItem>
        <IonLabel>Text :</IonLabel>
        <IonInput
          value={textValue}
          onIonChange={(event) => setTextValue(event.detail.value)}
          placeholder="Button displayed text"
        />
      </IonItem>
      <IonItem>
        <IonLabel>Color :</IonLabel>
        <IonSelect
          value={colorValue}
          onIonChange={(event) => setColorValue(event.detail.value)}
          interface="popover"
        >
          <IonSelectOption value="primary">Primary</IonSelectOption>
          <IonSelectOption value="secondary">Secondary</IonSelectOption>
          <IonSelectOption value="tertiary">Tertiary</IonSelectOption>
          <IonSelectOption value="success">Success</IonSelectOption>
          <IonSelectOption value="warning">Warning</IonSelectOption>
          <IonSelectOption value="danger">Danger</IonSelectOption>
          <IonSelectOption value="light">Light</IonSelectOption>
          <IonSelectOption value="medium">Medium</IonSelectOption>
          <IonSelectOption value="dark">Dark</IonSelectOption>
        </IonSelect>
        <IonButton slot="end" color={colorValue}>
          color
        </IonButton>
      </IonItem>

      <div className="tc pa2">
      <IonButton color="success" onClick={() => handleSave()}>
        Save
      </IonButton>
      </div>
    </>
  );
};

export default ButtonProperties;
