import { IonButton, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import ButtonProperties from "./ItemsProperties/ButtonProperties";
import HeaderProperties from "./ItemsProperties/HeaderProperties";
const ListContainer = styled.div`
    margin-top: 10px;
  `;

const PropertiesViewComp = () => {
  const dispatch = useDispatch(null);
  const propertiesItemKey = useSelector((state) => state.creatorViewSlice.propertiesItemKey);

  
  const handleView = () => {
    let keyName = propertiesItemKey.replace(/[0-9]/g, '');
    switch(keyName){
      case "Header" :
        return(<HeaderProperties />)
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