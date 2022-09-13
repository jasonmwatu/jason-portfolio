import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { 
    darkMode: (Math.random() < 0.75), // 75% probability of getting true - eq to darkMode is On
    // darkMode: false,
};

const reducerUiObjects = {
  toggle(state) {
    state.darkMode = !state.darkMode;
  }
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialCartState,
  reducers: reducerUiObjects,
});

export default uiSlice