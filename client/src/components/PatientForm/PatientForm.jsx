import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  Dialog,
  IconButton,
  TextField
} from '@material-ui/core';
import { CloseOutlined } from '@material-ui/icons';
import { usePatientFormStyles } from './usePatientFormStyles';
import { useInput } from '../../hooks/useInput';
import { patientsActions } from '../../store/patientSlice';


function PatientForm(props) {
  const classes = usePatientFormStyles();
  const dispatch = useDispatch();

  const isAdd = useSelector(state => state.patient.isAdd);
  const {
    id,
    patientName: editedPatientName,
    email: editedEmail,
    address: editedAddress,
    birthDay: editedbirthDay
  } = useSelector(state => state.patient.patientToEdit);

  const nameInput = useInput(value => value !== '');
  const emailInput = useInput(value => value.includes('@'));
  const addressInput = useInput(value => value.length > 4);
  const dateInput = useInput(value => value !== '');

  const resetAllInputs = () => {
    nameInput.reset();
    emailInput.reset();
    addressInput.reset();
    dateInput.reset();
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(!isAdd) {
      dispatch(patientsActions.editPatient({
        id,
        patientName: nameInput.value || editedPatientName,
        email: emailInput.value || editedEmail,
        address: addressInput.value || editedAddress,
        birthDay: dateInput.value || editedbirthDay
      }));
      resetAllInputs()
      props.showFormHandler()
      return;
    }

    dispatch(patientsActions.addPatient({
      patientName: nameInput.value,
      email: emailInput.value,
      address: addressInput.value,
      birthDay: dateInput.value
    }))
    resetAllInputs()
  };
  
  return (
    <Dialog open={props.showForm} onClose={props.showFormHandler} fullWidth>
      <Box component='form' className={classes.root} onSubmit={submitHandler}>
        <IconButton 
        className={classes.closeBtn} 
        aria-label="delete" 
        color='primary' 
        onClick={() => {
          props.showFormHandler();
          resetAllInputs();
        }}>
          <CloseOutlined/>
        </IconButton>

        <TextField 
          required 
          type = 'text'
          id = 'patientName'
          label = 'Nome do Paciente'
          onChange = {nameInput.enterValueHandler}
          onBlur = {nameInput.blurHandler}
          value={isAdd ? nameInput.value : undefined}
          defaultValue={!isAdd ? editedPatientName : undefined}
          error={nameInput.hasError}
          helperText={nameInput.hasError && 'Campo obrigatório'}
        />

        <TextField 
          required 
          type = 'email'
          id = 'email'
          label = 'Email' 
          onChange={emailInput.enterValueHandler}
          onBlur = {emailInput.blurHandler}
          value={isAdd ? emailInput.value : undefined}
          defaultValue={!isAdd ? editedEmail : undefined}
          error={emailInput.hasError}
          helperText={emailInput.hasError && 'Email inválido'}
        />

        <TextField 
          required 
          type='text' 
          id='address' 
          label='Endereço' 
          onChange={addressInput.enterValueHandler}
          onBlur = {addressInput.blurHandler}
          value={isAdd ? addressInput.value : undefined}
          defaultValue={!isAdd ? editedAddress : undefined}
          error={addressInput.hasError}
          helperText={addressInput.hasError && 'insira 4 caracteres ou mais'}
        />

        <TextField 
          required 
          type='date' 
          id='date' 
          label='Data de Nascimento' 
          InputLabelProps={{ shrink: true }}
          onChange={dateInput.enterValueHandler}
          onBlur = {dateInput.blurHandler}
          value={isAdd ? dateInput.value : undefined}
          defaultValue={!isAdd ? editedbirthDay : undefined}
          error={dateInput.hasError}
          helperText={dateInput.hasError && 'Data inválida'}
        />
        {isAdd ? <Button type='submit' variant='contained' color='primary'>Adicionar Paciente</Button> : <Button type='submit' variant='contained' color='primary'>Editar Paciente</Button>}
      </Box>
    </Dialog>
  )
}

export default PatientForm