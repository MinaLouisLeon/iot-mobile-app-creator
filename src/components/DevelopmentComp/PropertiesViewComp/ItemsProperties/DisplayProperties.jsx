import { IonButton, IonInput, IonItem, IonItemDivider, IonLabel } from "@ionic/react";
import {  useDispatch } from "react-redux";
import { useState } from "react";
import {setPropertiesItemKey} from '../../../../Slices/creatorViewSlice';
import { setDisplayProp } from "../../../../Slices/gridItemsSlice";
const DisplayProperties = ({displayKey}) => {
    const dispatch = useDispatch(null);
    const [header,setHeader] = useState("");
    const handleSave = () => {
        dispatch(setDisplayProp({
            key : displayKey,
            header : header
        }));
        dispatch(setPropertiesItemKey(""));
    }
  return (
    <>
        <IonItemDivider mode="md">Display</IonItemDivider>
        <IonItem>
            <IonLabel>
                Display Header :
            </IonLabel>
            <IonInput
                type="text"
                placeholder="display header text"
                value={header}
                onIonChange={(event) => setHeader(event.detail.value)}
            />
        </IonItem>
        <div className="tc pa2">
            <IonButton color="success" onClick={() => handleSave()}>
                Save
            </IonButton>
        </div>
    </>
  )
}

export default DisplayProperties