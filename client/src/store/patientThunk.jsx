import axios from 'axios';
import { patientsActions } from './patientSlice';
import { uiActions } from './uiSlice';
const url = 'https://q7gsh3t08h.execute-api.sa-east-1.amazonaws.com/dev/patients';

export const fetchPatients = () => async (dispatch) => {
  dispatch(uiActions.setIsloading());

  try {
    const { data } = await axios.get(url);
    dispatch(patientsActions.replacePatients(data.Items));
    dispatch(uiActions.setIsloading());
  } catch (error) {
    dispatch(uiActions.setError());
  };
};

export const createPatient = (newPatient) => async (dispatch) => {
  dispatch(uiActions.setIsloading());
  dispatch(uiActions.showFormHandler());
  try {
    const { data } = await axios({
      method: 'POST',
      url,
      data: JSON.stringify(newPatient)
    });
    dispatch(patientsActions.addPatient(data));
    dispatch(uiActions.setSuccess('Paciente criado com sucesso!'));
  } catch (error) {
    dispatch(uiActions.setError());
  }
};

export const editPatient = (editedPatient, id) => async (dispatch) => {
  try {
    await axios({
      method: 'PATCH',
      url: `${url}/${id}`,
      data: JSON.stringify(editedPatient) 
    });
    dispatch(patientsActions.editPatient({...editedPatient, id}));
    dispatch(uiActions.setSuccess('Paciente editado com sucesso!'));
    dispatch(uiActions.showFormHandler());
  } catch (error) {
    dispatch(uiActions.setError());
  };
};

export const removePatient = (patientId) => async (dispatch) => {
  try {
    await axios({
      method: 'DELETE',
      url: `${url}/${patientId.id}`
    });
    dispatch(patientsActions.removePatient(patientId));
    dispatch(uiActions.setSuccess('Paciente removido com sucesso!'));
  } catch (error) {
    dispatch(uiActions.setError());
  };
};