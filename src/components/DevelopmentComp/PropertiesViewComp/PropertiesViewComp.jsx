import { IonItemDivider, IonList} from "@ionic/react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ButtonProperties from "./ItemsProperties/ButtonProperties";
import HeaderProperties from "./ItemsProperties/HeaderProperties";
import DisplayProperties from "./ItemsProperties/DisplayProperties";
const ListContainer = styled.div`
    margin-top: 10px;
  `;

const PropertiesViewComp = () => {
  const propertiesItemKey = useSelector((state) => state.creatorViewSlice.propertiesItemKey);
  const handleView = () => {
    let keyName = propertiesItemKey.replace(/[0-9]/g, '');
    switch(keyName){
      case "Header" :
        return(<HeaderProperties />)
        case "btn" :
          return(<ButtonProperties buttonKey={propertiesItemKey}/>)
        case "display" :
          return(<DisplayProperties displayKey={propertiesItemKey}/>)
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