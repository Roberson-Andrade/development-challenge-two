import React from 'react';
import {
  Box,
  Button,
  IconButton,
  TextField
} from '@material-ui/core';
import { CloseOutlined } from '@material-ui/icons';
import { usePatientFormStyles } from './usePatientFormStyles';


function PatientForm(props) {
  const classes = usePatientFormStyles();
  return (
    <Box component='form' className={classes.root} {...props}>
      <IconButton className={classes.closeBtn} aria-label="delete" color='primary' onClick={props.showForm}>
        <CloseOutlined/>
      </IconButton>
      <TextField required type='text' id='patientName' label='Nome do Paciente' />
      <TextField required type='email' id='email' label='Email' />
      <TextField required type='text' id='address' label='Endereço' />
      <TextField required type='date' id='date' label='Data de Nascimento' InputLabelProps={{ shrink: true }} />
      <Button type='submit' variant='contained' color='primary'>Adicionar Paciente</Button>
    </Box>
  )
}

export default PatientForm