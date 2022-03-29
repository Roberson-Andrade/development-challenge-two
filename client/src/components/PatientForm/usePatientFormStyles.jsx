import { makeStyles } from '@material-ui/core/styles';

export const usePatientFormStyles = makeStyles({
  root: {
    border: '1px solid #d3d3d3', 
    borderRadius: '10px', 
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
    marginTop: '1.7rem',
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
