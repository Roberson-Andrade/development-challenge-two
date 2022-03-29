import { Box, Button, Container, Fade, Grow, Slide, Zoom } from '@material-ui/core';
import React, { useState } from 'react';
import PatientForm from './components/PatientForm/PatientForm';
import PatientTable from './components/PatientTable/PatientTable';
import { useAppStyles } from './useAppStyles';

function App() {
  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => {
    setShowForm((prevState => !prevState))
  }
  const classes = useAppStyles(); 
  return (
    <Container maxWidth='xl'>
      <Slide in={!showForm} unmountOnExit><Box className={classes.btn}><Button onClick={showFormHandler} variant='contained' color='primary' size='large'>Adicionar um novo paciente</Button></Box></Slide>  
      <Zoom in={showForm} unmountOnExit><PatientForm showForm={showFormHandler}/></Zoom>
      <PatientTable/>
    </Container>
  );
};

export default App;
