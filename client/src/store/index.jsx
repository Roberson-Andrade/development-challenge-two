import { configureStore } from "@reduxjs/toolkit";
import { patientSlice } from "./slice/patientSlice";
import { uiSlice } from "./slice/uiSlice";

export const store = configureStore({
  reducer: {
    patient: patientSlice.reducer,
    ui: uiSlice.reducer
  }
})