import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import PatientForm from './components/PatientForm/PatientForm';
import PatientTable from './components/PatientTable/PatientTable';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [defaultValues, setDefaultValues] = useState({
    defaultPatientName: '',
    defaultEmail: '',
    defaultAddress: '',
    defaultBirthDay: '',
  });

  const showFormHandler = () => {
    setShowForm((prevState => !prevState)) 
  }

  return (
    <Container maxWidth='xl'>
      <PatientForm showFormHandler={showFormHandler} showForm={showForm} defaultValues={defaultValues}/>
      <PatientTable showFormHandler={showFormHandler} setEditValues={setDefaultValues}/>
    </Container>
  );
};

export default App;
