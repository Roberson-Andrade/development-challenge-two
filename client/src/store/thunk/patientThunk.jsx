import axios from 'axios';
import { patientsActions } from '../slice/patientSlice';
import { uiActions } from '../slice/uiSlice';
const url = 'https://mwyx3m6fvb.execute-api.sa-east-1.amazonaws.com/dev/patients';

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
  dispatch(uiActions.showFormHandler());
  try {
    await axios({
      method: 'PATCH',
      url: `${url}/${id}`,
      data: JSON.stringify(editedPatient) 
    });
    dispatch(patientsActions.editPatient({...editedPatient, id}));
    dispatch(uiActions.setSuccess('Paciente editado com sucesso!'));
  } catch (error) {
    dispatch(uiActions.setError());
  };
};

export const removePatient = (patientId) => async (dispatch) => {
  dispatch(uiActions.setIsloadingDelete(patientId.id))
  try {
    await axios({
      method: 'DELETE',
      url: `${url}/${patientId.id}`
    });
    dispatch(patientsActions.removePatient(patientId));
    dispatch(uiActions.setSuccess('Paciente removido com sucesso!'));
  } catch (error) {
    dispatch(uiActions.setError());
  } finally {
    dispatch(uiActions.setIsloadingDelete());
  }
};