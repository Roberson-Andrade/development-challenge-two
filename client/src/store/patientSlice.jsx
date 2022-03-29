import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientItems: [
    {
      patientName: 'Sergio',
      email: 'Sergio@hotmail.com',
      address: 'Rua bonifacio vilela',
      birthDay: '1988/05/02'
    },
    {
      patientName: 'Larua',
      email: 'Larua@hotmail.com',
      address: 'Rua vilela',
      birthDay: '1958/05/02'
    },
    {
      patientName: 'Felipe',
      email: 'Felipe@hotmail.com',
      address: 'Rua bonifacio',
      birthDay: '1988/08/10'
    },
    {
      patientName: 'Wadler',
      email: 'wadler@hotmail.com',
      address: 'Rua santos',
      birthDay: '1990/08/25'
    },
    {
      patientName: 'Caren',
      email: 'caren@hotmail.com',
      address: 'Rua marechal',
      birthDay: '2000/05/02'
    },
    {
      patientName: 'Fabio',
      email: 'fabio@hotmail.com',
      address: 'Rua fabiano freitas',
      birthDay: '1944/09/22'
    },
  ],
}

export const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    addPatient(state, action) {
      state.patientItems.push(action.payload)
    }
  }

})

export const patientsActions = patientSlice.actions;