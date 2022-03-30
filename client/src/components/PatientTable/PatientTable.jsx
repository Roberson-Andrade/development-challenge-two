import React from 'react';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography
} from '@material-ui/core';
import { usePatientTableStyles } from './usePatientTableStyles';
import { Delete, Edit } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { patientsActions } from '../../store/patientSlice';

function PatientTable() {
  const classes = usePatientTableStyles();
  const patientRows = useSelector(state => state.patient.patientItems)
  const dispatch  = useDispatch();

  const removePatientHandler = (event) => {
    console.log(event.target.value)
    
  }
  return (
    <Paper className={classes.paper}>
      <Toolbar>
        <Typography variant='h5'>
          Pacientes
        </Typography>
      </Toolbar>

      <TableContainer className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell >Data de Nascimento</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {patientRows.map(row => (
              <TableRow hover key={row.id}>
                <TableCell>{row.patientName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.birthDay}</TableCell>
                <TableCell>
                  <IconButton size='small'>
                      <Edit />
                  </IconButton>    

                  <IconButton onClick={() => { dispatch(patientsActions.removePatient({ id: row.id })) } } color='secondary' size='small'>
                    <Delete/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>


  );
};

export default PatientTable