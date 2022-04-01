import { makeStyles } from '@material-ui/core/styles';

export const usePatientTableStyles = makeStyles({
  paper: {
    marginTop: '3rem',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto'
  },
  checkbox: {
    padding: '0px'
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  notFoundMsg: {
    textAlign: 'center',
    fontSize: '17px'
  }
});