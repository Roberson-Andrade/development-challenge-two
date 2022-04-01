import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientItems: [],
  lastEvaluatedKey: '',
  totalCount: 0
}

export const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    addPatient(state, action) {
      state.patientItems.push(action.payload)
      state.totalCount++
    },
    removePatient(state, action) {
      const existingPatient = state.patientItems.find(patient => patient.id === action.payload.id)

      if(!existingPatient) {
        return
      }
      state.patientItems = state.patientItems.filter(patient => patient.id !== existingPatient.id)
      state.totalCount--
    },
    editPatient(state, action) {
      const indexPatient = state.patientItems.findIndex(patient => patient.id === action.payload.id)

      if(!state.patientItems[indexPatient]) {
        return 
      }

      state.patientItems[indexPatient] = action.payload
    },
    replacePatients(state, action) {
      state.patientItems = state.patientItems.concat(action.payload.data.Items)
      state.lastEvaluatedKey = action.payload.lastEvaluatedKey
      state.totalCount = action.payload.data.totalCount
    }
  }

})

export const patientsActions = patientSlice.actions;