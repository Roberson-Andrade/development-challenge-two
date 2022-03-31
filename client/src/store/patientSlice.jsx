import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientItems: []
}

export const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    addPatient(state, action) {
      state.patientItems.push(action.payload)
    },
    removePatient(state, action) {
      const existingPatient = state.patientItems.find(patient => patient.id === action.payload.id)

      if(!existingPatient) {
        return
      }
      state.patientItems = state.patientItems.filter(patient => patient.id !== existingPatient.id)
    },
    editPatient(state, action) {
      const indexPatient = state.patientItems.findIndex(patient => patient.id === action.payload.id)

      if(!state.patientItems[indexPatient]) {
        return 
      }

      state.patientItems[indexPatient] = action.payload
    },
    replacePatients(state, action) {
      state.patientItems = action.payload
    }
  }

})

export const patientsActions = patientSlice.actions;