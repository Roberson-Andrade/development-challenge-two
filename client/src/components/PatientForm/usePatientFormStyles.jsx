import { makeStyles } from '@material-ui/core/styles';

export const usePatientFormStyles = makeStyles({
  root: {
    padding: '2rem 4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&  .MuiTextField-root': { 
      margin: '.5rem', 
      width: '100%',
    },
    '& .MuiButton-root': {
      marginTop: '1rem'
    },
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative'
  },
  closeBtn: {
    position: 'absolute',
    top: '5px',
    right: '10px'
  }
});
