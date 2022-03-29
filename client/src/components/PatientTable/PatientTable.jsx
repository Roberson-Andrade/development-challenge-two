import React from 'react';
import {
  Checkbox,
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

const dummyRows = [
  {
    patientName: 'Sergio',
    email: 'Sergio@hotmail.com',
    address: 'Rua bonifacio vilela',
    birthDay: '1988/05/02'
  },
  {
    patientName: 'Larua',
    email: 'Larua@hotmail.com',
    address: 'Rua vilela',
    birthDay: '1958/05/02'
  },
  {
    patientName: 'Felipe',
    email: 'Felipe@hotmail.com',
    address: 'Rua bonifacio',
    birthDay: '1988/08/10'
  },
  {
    patientName: 'Wadler',
    email: 'wadler@hotmail.com',
    address: 'Rua santos',
    birthDay: '1990/08/25'
  },
  {
    patientName: 'Caren',
    email: 'caren@hotmail.com',
    address: 'Rua marechal',
    birthDay: '2000/05/02'
  },
  {
    patientName: 'Fabio',
    email: 'fabio@hotmail.com',
    address: 'Rua fabiano freitas',
    birthDay: '1944/09/22'
  },
]

function PatientTable() {
  const classes = usePatientTableStyles();

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
              <TableCell className={classes.checkbox}><Checkbox /></TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell >Data de Nascimento</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dummyRows.map(row => (
              <TableRow hover>
                <TableCell className={classes.checkbox}><Checkbox /></TableCell>
                <TableCell>{row.patientName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.birthDay}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>


  );
};

export default PatientTable