import { IonButton, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import {setHeaderMode,setIsHeaderEnabled,setHeaderTitle} from '../../../Slices/gridItemsSlice';
import ButtonProperties from "./ItemsProperties/ButtonProperties";
const ListContainer = styled.div`
    margin-top: 10px;
  `;

const PropertiesViewComp = () => {
  const dispatch = useDispatch(null);
  const propertiesItemKey = useSelector((state) => state.creatorViewSlice.propertiesItemKey);
  const headerMode = useSelector((state) => state.gridItemsSlice.headerMode);
  const [headerText , setHeaderText] = useState("");
  const handleView = () => {
    let key = propertiesItemKey.replace(/[0-9]/g, '');
    switch(key){
      case "Header" :
        return(<>
          <IonItemDivider mode="md">Header</IonItemDivider>
          <IonItem lines="full">
            <IonLabel>
              Title :
            </IonLabel>
            <IonInput 
              value={headerText}
              placeholder="Header Text Value"
              type="text"
              onIonChange={(e) => setHeaderText(e.detail.value)}
            />
            <IonButton slot="end"
              onClick={() => dispatch(setHeaderTitle(headerText))}
            >save</IonButton>
          </IonItem>
        </>)
        case "btn" :
          return(<ButtonProperties/>)
      default :
        return(<></>)
    }
  }
  return (
    <ListContainer>
        <IonList>
            <IonItemDivider mode="ios">Properties </IonItemDivider>
            {handleView()}
        </IonList>
    </ListContainer>
  )
}

export default PropertiesViewComp