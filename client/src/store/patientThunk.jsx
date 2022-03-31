import axios from 'axios';
import { patientsActions } from './patientSlice';
const url = 'https://q7gsh3t08h.execute-api.sa-east-1.amazonaws.com/dev/patients';

export const fetchPatients = () => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch(patientsActions.replacePatients(data.Items));
  } catch (error) {
    console.log(error);
  }
}

export const createPatient = (newPatient) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: 'POST',
      url,
      data: JSON.stringify(newPatient)
    })
    console.log(data)
    dispatch(patientsActions.addPatient(data))
  } catch (error) {
    console.log(error)
  }
}

export const editPatient = (editedPatient, id) => async (dispatch) => {
  try {
    await axios({
      method: 'PATCH',
      url: `${url}/${id}`,
      data: JSON.stringify(editedPatient) 
    })
    dispatch(patientsActions.editPatient({...editedPatient, id}))
  } catch (error) {
    console.log(error)
  }
}

export const removePatient = (patientId) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: 'DELETE',
      url: `${url}/${patientId.id}`
    })
    console.log(data)
    dispatch(patientsActions.removePatient(patientId))
  } catch (error) {
    console.log(error)
  }
}