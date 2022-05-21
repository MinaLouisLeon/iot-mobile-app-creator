import {db} from './FirebaseConfig';
import { doc, setDoc } from "firebase/firestore";

export const  exportApp = async (uid,docName,data) => {
    try{
        await setDoc(doc(db,uid,docName),data);
        return true;
    }catch{
        return false;
    }
    
}