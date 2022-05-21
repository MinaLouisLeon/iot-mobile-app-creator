import { useSelector, useDispatch } from "react-redux";
import {
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonItemDivider,
} from "@ionic/react";
import {
  setZoomLevel,
} from "../../../Slices/creatorViewSlice";
import { addButtonToLayout ,setIsHeaderEnabled,} from "../../../Slices/gridItemsSlice";
import styled from "styled-components";
const ControlViewComp = () => {
  const dispatch = useDispatch(null);
  const zoomLevel = useSelector((state) => state.creatorViewSlice.zoomLevel);
  const isHeaderEnabled = useSelector(
    (state) => state.gridItemsSlice.isHeaderEnabled
  );
  const buttonsCounter = useSelector(
    (state) => state.gridItemsSlice.buttonsCounter
  );
  const ListContainer = styled.div`
    margin-top: 10px;
  `;
  const handleAddButton = () => {
    let btnKey = "btn" + (buttonsCounter + 1).toString();
    dispatch(
      addButtonToLayout({
        color: "primary",
        name: btnKey,
        layout: {
          w: 0,
          h: 0,
          x: 0,
          y: 0,
          i: btnKey,
        },
      })
    );
  };

  return (
    <ListContainer>
      <IonList>
        <IonItemDivider mode="ios">Options</IonItemDivider>
        {/* TODO add landscape */}
        {/* zoom level handler */}
        <IonItem>
          <IonLabel>Zoom</IonLabel>
          <IonSelect
            interface="popover"
            mode="ios"
            value={zoomLevel}
            onIonChange={(e) => dispatch(setZoomLevel(e.detail.value))}
          >
            <IonSelectOption value={"50%"}>50%</IonSelectOption>
            <IonSelectOption value={"75%"}>75%</IonSelectOption>
            <IonSelectOption value={"100%"}>100%</IonSelectOption>
            <IonSelectOption value={"125%"}>125%</IonSelectOption>
            <IonSelectOption value={"150%"}>150%</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItemDivider mode="ios">Items</IonItemDivider>
        {/* add header control */}
        <IonItem
          button
          onClick={() => dispatch(setIsHeaderEnabled(!isHeaderEnabled))}
        >
          <IonLabel>Add Header</IonLabel>
          <IonCheckbox checked={isHeaderEnabled}></IonCheckbox>
        </IonItem>
        {/* add button control */}
        <IonItem button onClick={() => handleAddButton()}>
          Add Button
        </IonItem>
      </IonList>
    </ListContainer>
  );
};

export default ControlViewComp;
