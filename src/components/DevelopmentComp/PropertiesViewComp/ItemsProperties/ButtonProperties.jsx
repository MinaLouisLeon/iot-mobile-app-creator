import { IonItemDivider, IonLabel, IonSelect, IonSelectOption,IonItem } from '@ionic/react'
import { useSelector , useDispatch } from 'react-redux'
const ButtonProperties = () => {
  return (
    <>
        <IonItemDivider mode='md'>Button Properties</IonItemDivider>
        <IonItem lines='full'>
            <IonLabel>Color :</IonLabel>
            <IonSelect value="primary" interface='popover' mode="ios">
              <IonSelectOption value="primary">Primary</IonSelectOption>
              <IonSelectOption  value="dager">Danger</IonSelectOption>
            </IonSelect>
        </IonItem>
    </>
  )
}

export default ButtonProperties