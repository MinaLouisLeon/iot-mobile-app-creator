import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from './Slices/userInfoSlice';
import creatorViewSlice  from './Slices/creatorViewSlice';
import gridItemsSlice from './Slices/gridItemsSlice';
export const store = configureStore({
  reducer: {
    userInfoSlice : userInfoSlice,
    creatorViewSlice : creatorViewSlice,
    gridItemsSlice : gridItemsSlice,
  },
  devTools: true,
});
