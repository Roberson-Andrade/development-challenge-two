import { configureStore } from "@reduxjs/toolkit";
import { patientSlice } from "./patientSlice";
import { uiSlice } from "./uiSlice";

export const store = configureStore({
  reducer: {
    patient: patientSlice.reducer,
    ui: uiSlice.reducer
  }
})