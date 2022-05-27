import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appMode : "Home",
  isLandscape: false,
  QrCodeValue : "",
  zoomLevel: "75%",
  controlWidth: "20%",
  isControlOpen : true,
  propertiesWidth: "30%",
  isPropertiesOpen : true,
  mobileViewWidth : "50%",
  propertiesItemKey : "",
  isControlOptionsOpen : true,
  controlOptionsHeight : "fit-content",
  isControlItemsOpen : true,
  controlItemsHeight : "fit-content",
  isControlScreensOpen : "true",
  controlScreensHeight : "fit-content",
  usedPin : []
};

export const creatorViewSlice = createSlice({
  name: "creatorViewSlice",
  initialState,
  reducers: {
    setAppMode:(state,action)=>{
      state.appMode = action.payload;
    },
    setIsLandscape: (state, action) => {
      console.log(action.isLandscape);
      state.isLandscape = action.payload;
    },
    setZoomLevel: (state, action) => {
      state.zoomLevel = action.payload;
    },
    ToggleIsControlOpen: (state) => {
      // control view is open and properties view is open => close control view
      if(state.isControlOpen && state.isPropertiesOpen){
        state.isControlOpen = false;
        state.controlWidth = "15px";
        state.mobileViewWidth = "70%"
      }
      // control view is open and properties view is close => close control view
      else if(state.isControlOpen && !state.isPropertiesOpen){
        state.isControlOpen = false;
        state.controlWidth = "15px";
        state.mobileViewWidth = "100%";
      }
      // control view is close and properties view is open => open control view
      else if(!state.isControlOpen && state.isPropertiesOpen){
        state.isControlOpen = true;
        state.controlWidth = "20%";
        state.mobileViewWidth = "50%";
      }
      // control view is close and properties view is close => open control view
      else if(!state.isControlOpen && !state.isPropertiesOpen){
        state.isControlOpen = true;
        state.controlWidth = "20%";
        state.mobileViewWidth = "80%";
      }
    },
    ToggleIsPropertiesOpen:(state) => {
      // properties view is open amd control view is open => close properties view
      if(state.isPropertiesOpen && state.isControlOpen){
        state.isPropertiesOpen = false;
        state.propertiesWidth = "15px";
        state.mobileViewWidth = "80%";
      }
      // properties view is open and control view is close => close properties view
      else if(state.isPropertiesOpen && !state.isControlOpen){
        state.isPropertiesOpen = false;
        state.propertiesWidth = "15px";
        state.mobileViewWidth = "100%";
      }
      // properties view is close and control view is open => open properties view
      else if(!state.isPropertiesOpen && state.isControlOpen){
        state.isPropertiesOpen = true;
        state.propertiesWidth = "30%";
        state.mobileViewWidth = "50%";
      }
      // properties view is close and control view is close => open properties view
      else if(!state.isPropertiesOpen && !state.isControlOpen){
        state.isPropertiesOpen = true;
        state.propertiesWidth = "30%";
        state.mobileViewWidth = "70%"
      }
    },
    setOpenProperties:(state,action) => {
      //properties view is close and control view is open => open properties view
      if(!state.isPropertiesOpen && state.isControlOpen){
        state.isPropertiesOpen = true;
        state.propertiesWidth = "30%";
        state.mobileViewWidth = "50%";
      }
      //properties view is close and control view is close => open properties view
      else if (!state.isPropertiesOpen && !state.isControlOpen){
        state.isPropertiesOpen = true;
        state.propertiesWidth = "30%";
        state.mobileViewWidth = "70%";
      }
      state.propertiesItemKey = action.payload;
    },
    setPropertiesItemKey:(state,action) => {
      state.propertiesItemKey = action.payload;
    },
    toggleControlOptions:(state) => {
      if(state.isControlOptionsOpen){
        state.isControlOptionsOpen = false;
        state.controlOptionsHeight = "30px";
      }else{
        state.isControlOptionsOpen = true;
        state.controlOptionsHeight = "fit-content";
      }
    },
    toggleControlItems:(state) => {
      if(state.isControlItemsOpen){
        state.isControlItemsOpen = false;
        state.controlItemsHeight = "30px";
      }else{
        state.isControlItemsOpen = true;
        state.controlItemsHeight = "fit-content";
      }
    },
    toggleControlScreens:(state)=>{
      if(state.isControlScreensOpen){
        state.isControlScreensOpen = false;
        state.controlScreensHeight = "30px";
      }else{
        state.isControlScreensOpen = false;
        state.controlScreensHeight = "fit-content"
      }
    },
    generateQrCode:(state,action) => {
      state.QrCodeValue = action.payload.qrValue;
      state.appMode = action.payload.appMode;
    },
    addToUsedPin:(state,action) => {
      state.usedPin.push(action.payload)
    }
  },
});

export const {
  setAppMode,
  setIsLandscape,
  setZoomLevel,
  ToggleIsControlOpen,
  ToggleIsPropertiesOpen,
  setOpenProperties,
  setPropertiesItemKey,
  toggleControlOptions,
  toggleControlItems,
  toggleControlScreens,
  generateQrCode,
  addToUsedPin
} = creatorViewSlice.actions;
export default creatorViewSlice.reducer;
