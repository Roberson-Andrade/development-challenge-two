import { Container, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PatientForm from "./components/PatientForm/PatientForm";
import PatientTable from "./components/PatientTable/PatientTable";
import { uiActions } from "./store/slice/uiSlice";

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  const [defaultValues, setDefaultValues] = useState({
    defaultPatientName: '',
    defaultEmail: '',
    defaultAddress: '',
    defaultBirthDay: '',
  });

  const closeNotificaionHandler = () => {
    dispatch(uiActions.closeNotificaton())
  }

  return (
    <Container maxWidth='xl'>
      <PatientForm defaultValues={defaultValues} />
      <PatientTable setEditValues={setDefaultValues} />
      <Snackbar open={notification.show} autoHideDuration={6000} onClose={closeNotificaionHandler}>
        <Alert onClose={closeNotificaionHandler} severity={notification.status}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
