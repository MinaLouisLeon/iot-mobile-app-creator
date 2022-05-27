import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gridLayouts: [],
  isHeaderEnabled: true,
  headerTopValue: "10vh",
  headerMode: "md",
  headerTitle: "Header",
  buttons: [],
  buttonsCounter: 0,
};

export const gridItemsSlice = createSlice({
  name: "gridItemsSlice",
  initialState,
  reducers: {
    setGridLayouts: (state, action) => {
      state.gridLayouts = action.payload;
    },
    setIsHeaderEnabled: (state, action) => {
      state.isHeaderEnabled = action.payload;
      action.payload
        ? (state.headerTopValue = "10vh")
        : (state.headerTopValue = 0);
    },
    setHeaderMode: (state, action) => {
      state.headerMode = action.payload;
    },
    setHeaderTitle:(state,action) => {
      state.headerTitle = action.payload
    },
    addButtonToLayout: (state, action) => {
      state.buttonsCounter = state.buttonsCounter + 1;
      state.buttons.push({
        color: action.payload.color,
        name: action.payload.name,
        key: action.payload.layout.i,
      });
      state.gridLayouts.push(action.payload.layout);
    },
    setButtonColor:(state,action) => {
      state.buttons.map((button,index) => {
        if(button.key === action.payload.key){
          state.buttons[index].color = action.payload.color;
        }
      })
    },
    setButtonProp:(state,action) => {
      state.buttons.map((button,index) => {
        if(button.key === action.payload.key){
          state.buttons[index].name = action.payload.name;
          state.buttons[index].color = action.payload.color;
        }
      })
    },
  },
});

export const {
  setGridLayouts,
  addButtonToLayout,
  setIsHeaderEnabled,
  setHeaderMode,
  setHeaderTitle,
  setButtonColor,
  setButtonProp
} = gridItemsSlice.actions;

export default gridItemsSlice.reducer;
