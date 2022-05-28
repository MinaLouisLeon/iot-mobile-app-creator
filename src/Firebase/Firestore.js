import { db } from "./FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const exportApp = async (uid, data) => {
  let buttons = [];
  data.buttons.forEach((element) => {
    buttons.push(element);
  });
  let displays = [];
  data.displays.forEach((element) => {
    displays.push(element);
  })
  let gridLayouts = [];
  data.gridLayouts.forEach((element) => {
    let tempObj = {};
    Object.keys(element).map((index) => {
      if (element[index] !== undefined) {
        tempObj = {
          ...tempObj,
          [index]: element[index],
        };
      }
      if(index === "static"){
        tempObj = {
          ...tempObj,
          [index] : true,
        }
      }
    });
    console.log(tempObj);
    gridLayouts.push(tempObj);
  });
  console.log(gridLayouts);
  try {
    await setDoc(doc(db, "usersAppData", uid), {
      buttons,
      displays,
      gridLayouts,
      isHeaderEnabled: data.isHeaderEnabled,
      headerTopValue: data.headerTopValue,
      headerMode: data.headerMode,
      headerTitle: data.headerTitle,
      buttonsCounter: data.buttonsCounter,
      displaysCounter : data.displaysCounter
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
