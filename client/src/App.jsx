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
      <PatientForm showFormHandler={showFormHandler} showForm={showForm}/>
      <PatientTable showFormHandler={showFormHandler}/>
    </Container>
  );
};

export default App;
