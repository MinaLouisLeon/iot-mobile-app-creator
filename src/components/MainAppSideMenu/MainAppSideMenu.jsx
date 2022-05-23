import { IonContent, IonHeader, IonItem, IonList, IonMenu, IonTitle, IonToolbar } from "@ionic/react"
import { exportApp } from "../../Firebase/Firestore"
import { useSelector } from "react-redux"
const MainAppSideMenu = () => {
    const uid = useSelector((state) => state.userInfoSlice.userInfo.uid);
    const gridItemsSlice = useSelector((state) => state.gridItemsSlice);
    const handleExport = async () => {
        if(uid !== ""){
            let res = await exportApp(uid,gridItemsSlice);
        if(res){
            console.log("done")
        }else{
            console.log("failed")
        }   
        }else{
            console.log("need to login")
        }
    }
  return (
    <IonMenu contentId="home" mode="ios">
        <IonHeader>
            <IonToolbar mode="ios">
                <IonTitle>Options</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
                <IonItem button>
                    Add Button
                </IonItem>
                <IonItem button color="success" onClick={() => handleExport()}>
                    Create PWA
                </IonItem>
            </IonList>
        </IonContent>
    </IonMenu>
  )
}

export default MainAppSideMenu