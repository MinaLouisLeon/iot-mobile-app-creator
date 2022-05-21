import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLandscape: false,
  zoomLevel: "75%",
  controlWidth: "20%",
  isControlOpen : true,
  propertiesWidth: "30%",
  isPropertiesOpen : true,
  mobileViewWidth : "50%",
  propertiesItemKey : "",
};

export const creatorViewSlice = createSlice({
  name: "creatorViewSlice",
  initialState,
  reducers: {
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
  },
});

export const {
  setIsLandscape,
  setZoomLevel,
  ToggleIsControlOpen,
  ToggleIsPropertiesOpen,
  setOpenProperties
} = creatorViewSlice.actions;
export default creatorViewSlice.reducer;
