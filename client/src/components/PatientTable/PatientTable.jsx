import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { usePatientTableStyles } from "./usePatientTableStyles";
import { Delete, Edit, PersonAdd } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients, removePatient } from "../../store/thunk/patientThunk";
import { uiActions } from "../../store/slice/uiSlice";
import { format } from "date-fns";
import { TablePaginationActions } from "./TablePaginationActions";

function PatientTable(props) {
  const classes = usePatientTableStyles();
  const patientRows = useSelector((state) => state.patient.patientItems);
  const totalCount = useSelector((state) => state.patient.totalCount)
  const isLoading = useSelector((state) => state.ui.isLoading);
  const isLoadingDelete = useSelector((state) => state.ui.isLoadingDelete);
  const dispatch = useDispatch();
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage)
  }

  const rowsPerPageHandler = (event) => {
    setRowsPerPage(event.target.value)
    setPage(0)
  }

  useEffect(() => {
    dispatch(fetchPatients());
  }, [fetchPatients]);

  const showFormHandler = () => {
    props.setEditValues({});
    dispatch(uiActions.showFormHandler())
  };

  return (
    <Paper className={classes.paper}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5">Pacientes</Typography>
        <IconButton
          onClick={showFormHandler}
          variant="contained"
          color="primary"
        >
          <PersonAdd />
        </IconButton>
      </Toolbar>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Data de Nascimento</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  className={classes.notFoundMsg}
                  variant="footer"
                  colSpan={5}
                >
                  <CircularProgress color="primary" />
                </TableCell>
              </TableRow>
            ) : patientRows.length !== 0 ? (
              patientRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow hover key={row.id}>
                  <TableCell>{row.patientName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{format(new Date(row.birthDay), 'dd/MM/yyyy') }</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => {
                        props.setEditValues({
                          id: row.id,
                          defaultPatientName: row.patientName,
                          defaultEmail: row.email,
                          defaultAddress: row.address,
                          defaultBirthDay: row.birthDay,
                        });
                        dispatch(uiActions.showFormHandler())
                      }}
                    >
                      <Edit />
                    </IconButton>

                    <IconButton
                      onClick={() => {
                        dispatch(removePatient({ id: row.id }));
                      }}
                      color="secondary"
                      size="small"
                    >
                      {(isLoadingDelete.status && isLoadingDelete.rowId === row.id) ? <CircularProgress size='24px' color='secondary'/> : <Delete />}
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className={classes.notFoundMsg}
                  variant="footer"
                  colSpan={5}
                >
                  Nenhum paciente registrado
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={totalCount}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5]}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageHandler}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default PatientTable;
