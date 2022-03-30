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
import { Delete, Edit, PersonAdd } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { patientsActions } from '../../store/patientSlice';

function PatientTable(props) {
  const classes = usePatientTableStyles();
  const patientRows = useSelector(state => state.patient.patientItems)
  const dispatch  = useDispatch();

  
  const showFormHandler = () => {
    props.setEditValues({})
    props.showFormHandler()
  }

  return (
    <Paper className={classes.paper}>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5'>
          Pacientes
        </Typography>
        <IconButton onClick={showFormHandler} variant='contained' color='primary'>
            <PersonAdd/>
        </IconButton>
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
            {patientRows.length !== 0 ? patientRows.map(row => (
              <TableRow hover key={row.id}>
                <TableCell>{row.patientName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.birthDay}</TableCell>
                <TableCell>
                  <IconButton 
                    size='small' 
                    color='primary' 
                    onClick={() => { 
                      props.setEditValues({ 
                        id: row.id,
                        defaultPatientName: row.patientName,
                        defaultEmail: row.email,
                        defaultAddress: row.address,
                        defaultBirthDay: row.birthDay
                      })
                      props.showFormHandler();
                    }}
                  >
                      <Edit />
                  </IconButton>    

                  <IconButton onClick={() => { dispatch(patientsActions.removePatient({ id: row.id })) } } color='secondary' size='small'>
                    <Delete/>
                  </IconButton>
                </TableCell>
              </TableRow>
            )) : <TableRow><TableCell className={classes.notFoundMsg} variant='footer' colSpan={5}>Nenhum paciente registrado</TableCell></TableRow>}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>


  );
};

export default PatientTable