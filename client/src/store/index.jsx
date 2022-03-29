import { configureStore } from "@reduxjs/toolkit";
import { patientSlice } from "./patientSlice";

export const store = configureStore({
  reducer: {
    patient: patientSlice.reducer
  }
})