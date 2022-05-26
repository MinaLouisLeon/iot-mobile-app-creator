import { useSelector, useDispatch } from "react-redux";
import {
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonItemDivider,
  IonIcon
} from "@ionic/react";
import { caretDownOutline, caretUpOutline } from "ionicons/icons";
import {
  setZoomLevel,
  toggleControlOptions,
  toggleControlItems,
} from "../../../Slices/creatorViewSlice";
import {
  addButtonToLayout,
  setIsHeaderEnabled,
} from "../../../Slices/gridItemsSlice";
import styled from "styled-components";

const ListContainer = styled.div`
  margin-top: 10px;
`;

const OptionsContainer = styled.div`
  width: inherit;
  height: ${(props) => props.heightValue};
`;

const ItemsContaier = styled.div`
  width: inherit;
  height: ${(props) => props.heightValue};
`;

const ToggleControlSections = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: fit-content;
  width: fit-content;
  cursor: pointer;
`;

const ControlViewComp = () => {
  const dispatch = useDispatch(null);
  const zoomLevel = useSelector((state) => state.creatorViewSlice.zoomLevel);
  const isHeaderEnabled = useSelector(
    (state) => state.gridItemsSlice.isHeaderEnabled
  );
  const buttonsCounter = useSelector(
    (state) => state.gridItemsSlice.buttonsCounter
  );
  const isControlOptionsOpen = useSelector(
    (state) => state.creatorViewSlice.isControlOptionsOpen
  );
  const controlOptionsHeight = useSelector(
    (state) => state.creatorViewSlice.controlOptionsHeight
  );
  const isControlItemsOpen = useSelector((state) => state.creatorViewSlice.isControlItemsOpen);
  const controlItemsHeight = useSelector((state) => state.creatorViewSlice.controlItemsHeight);
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
        {/* TODO add icons to close and open control options */}
        <OptionsContainer heightValue={controlOptionsHeight}>
          <IonItemDivider mode="ios">
            Options
            <ToggleControlSections
              onClick={() => dispatch(toggleControlOptions())}
            >
              {isControlOptionsOpen ? <IonIcon icon={caretUpOutline} />: <IonIcon icon={caretDownOutline} />}
            </ToggleControlSections>
          </IonItemDivider>
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
        </OptionsContainer>
        {/* TODO add icons to close and open control items */}
        <ItemsContaier heightValue={controlItemsHeight}>
          <IonItemDivider mode="ios">
            Items
            <ToggleControlSections
              onClick={() => dispatch(toggleControlItems())}
            >
              {isControlItemsOpen ? <IonIcon icon={caretUpOutline} />: <IonIcon icon={caretDownOutline} />}
            </ToggleControlSections>
          </IonItemDivider>
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
        </ItemsContaier>
      </IonList>
    </ListContainer>
  );
};

export default ControlViewComp;
