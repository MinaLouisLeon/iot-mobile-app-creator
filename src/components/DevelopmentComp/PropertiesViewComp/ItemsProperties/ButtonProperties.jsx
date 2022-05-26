import { IonItemDivider } from "@ionic/react";
import { useSelector , useDispatch } from "react-redux";
const ButtonProperties = () => {
  const dispatch = useDispatch(null);
  return (
    <>
      <IonItemDivider mode="md">Button</IonItemDivider>
    </>
  )
}

export default ButtonProperties