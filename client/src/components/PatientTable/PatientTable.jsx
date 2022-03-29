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
import { useSelector } from 'react-redux';

function PatientTable() {
  const classes = usePatientTableStyles();
  const patientRows = useSelector(state => state.patient.patientItems)

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
              <TableRow hover>
                <TableCell>{row.patientName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.birthDay}</TableCell>
                <TableCell>
                  <IconButton size='small'>
                      <Edit />
                  </IconButton>    

                  <IconButton color='secondary' size='small'>
                    <Delete />
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