import { Container, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PatientForm from "./components/PatientForm/PatientForm";
import PatientTable from "./components/PatientTable/PatientTable";
import { uiActions } from "./store/uiSlice";

function App() {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const [defaultValues, setDefaultValues] = useState({
    defaultPatientName: "",
    defaultEmail: "",
    defaultAddress: "",
    defaultBirthDay: "",
  });

  return (
    <Container maxWidth="xl">
      <PatientForm defaultValues={defaultValues} />
      <PatientTable setEditValues={setDefaultValues} />
      <Snackbar open={notification.show} autoHideDuration={6000} onClose={() => { dispatch(uiActions.closeNotificaton()) }}>
        <Alert onClose={() => { dispatch(uiActions.closeNotificaton()) }} severity={notification.status}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
