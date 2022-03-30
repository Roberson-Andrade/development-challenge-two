import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
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

  const nameInput = useInput(value => value !== '');
  const emailInput = useInput(value => value.includes('@'));
  const addressInput = useInput(value => value.length > 4);
  const dateInput = useInput(value => value !== '');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(addressInput.value);
    console.log(dateInput.value);
    nameInput.reset();
    emailInput.reset();
    addressInput.reset();
    dateInput.reset();

    dispatch(patientsActions.addPatient({
      patientName: nameInput.value,
      email: emailInput.value,
      address: addressInput.value,
      birthDay: dateInput.value
    }))
  };
  return (
    <Box component='form' className={classes.root} {...props} onSubmit={submitHandler}>
      <IconButton className={classes.closeBtn} aria-label="delete" color='primary' onClick={props.showForm}>
        <CloseOutlined/>
      </IconButton>

      <TextField 
        required 
        type = 'text'
        id = 'patientName'
        label = 'Nome do Paciente'
        onChange = {nameInput.enterValueHandler}
        onBlur = {nameInput.blurHandler}
        value={nameInput.value}
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
        value={emailInput.value}
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
        value={addressInput.value}
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
        value={dateInput.value}
        error={dateInput.hasError}
        helperText={dateInput.hasError && 'Data inválida'}
      />
      <Button type='submit' variant='contained' color='primary'>Adicionar Paciente</Button>
    </Box>
  )
}

export default PatientForm