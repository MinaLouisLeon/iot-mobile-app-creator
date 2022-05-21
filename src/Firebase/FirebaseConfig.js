// import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  // add firebase config
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
export const app = firebase.initializeApp(firebaseConfig);  
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
export {firebase};
