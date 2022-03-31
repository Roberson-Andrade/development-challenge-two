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
import { createPatient, editPatient } from '../../store/patientThunk';


function PatientForm(props) {
  const classes = usePatientFormStyles();
  const dispatch = useDispatch();

  const {
    id,
    defaultPatientName,
    defaultEmail,
    defaultAddress,
    defaultBirthDay,
  } = props.defaultValues;

  const nameInput = useInput(value => value !== '', defaultPatientName);
  const emailInput = useInput(value => value.includes('@'), defaultEmail);
  const addressInput = useInput(value => value.length > 4, defaultAddress);
  const dateInput = useInput(value => value !== '', defaultBirthDay);

  const resetAllInputs = () => {
    nameInput.reset();
    emailInput.reset();
    addressInput.reset();
    dateInput.reset();
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if(defaultPatientName) {
      const editedPatient = {
        patientName: nameInput.value || defaultPatientName,
        email: emailInput.value || defaultEmail,
        address: addressInput.value || defaultAddress,
        birthDay: dateInput.value || defaultBirthDay
      }
      
      dispatch(editPatient(editedPatient, id));
      resetAllInputs()
      props.showFormHandler()
      return;
    }
    
    dispatch(createPatient({
      patientName: nameInput.value,
      email: emailInput.value,
      address: addressInput.value,
      birthDay: dateInput.value
    }))
    resetAllInputs()
    props.showFormHandler()
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
          value={!defaultPatientName ? nameInput.value : undefined}
          defaultValue={defaultPatientName ? defaultPatientName : undefined}
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
          value={!defaultPatientName ? emailInput.value : undefined}
          defaultValue={defaultPatientName ? defaultEmail : undefined}
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
          value={!defaultPatientName ? addressInput.value : undefined}
          defaultValue={defaultPatientName ? defaultAddress : undefined}
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
          value={!defaultPatientName ? dateInput.value : undefined}
          defaultValue={defaultPatientName ? defaultBirthDay : undefined}
          error={dateInput.hasError}
          helperText={dateInput.hasError && 'Data inválida'}
        />
        {!defaultPatientName ? <Button type='submit' variant='contained' color='primary'>Adicionar Paciente</Button> : <Button type='submit' variant='contained' color='primary'>Editar Paciente</Button>}
      </Box>
    </Dialog>
  )
}

export default PatientForm