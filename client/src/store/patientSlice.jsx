import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientItems: [
    {
      id: 'p1',
      patientName: 'Sergio',
      email: 'Sergio@hotmail.com',
      address: 'Rua bonifacio vilela',
      birthDay: '1988-05-02'
    },
    {
      id: 'p2',
      patientName: 'Larua',
      email: 'Larua@hotmail.com',
      address: 'Rua vilela',
      birthDay: '1958-05-02'
    },
    {
      id: 'p3',
      patientName: 'Felipe',
      email: 'Felipe@hotmail.com',
      address: 'Rua bonifacio',
      birthDay: '1988-08-10'
    },
    {
      id: 'p4',
      patientName: 'Wadler',
      email: 'wadler@hotmail.com',
      address: 'Rua santos',
      birthDay: '1990-08-25'
    },
    {
      id: 'p5',
      patientName: 'Caren',
      email: 'caren@hotmail.com',
      address: 'Rua marechal',
      birthDay: '2000-05-02'
    },
    {
      id: 'p6',
      patientName: 'Fabio',
      email: 'fabio@hotmail.com',
      address: 'Rua fabiano freitas',
      birthDay: '1944-09-22'
    },
  ],
  isAdd: true,
  patientToEdit: {}
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
    setEditPatient(state, action) {
      state.isAdd = false
      state.patientToEdit = action.payload
    },
    setIsAddTrue(state) {
      state.isAdd = true
    }
  }

})

export const patientsActions = patientSlice.actions;