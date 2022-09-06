import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { 
    darkMode: false, 
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