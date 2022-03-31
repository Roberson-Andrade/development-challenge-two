import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: {
    status: '',
    message: '',
    show: false
  },
  isLoading: false,
  showForm: false
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSuccess(state, action) {
      state.notification.message = action.payload;
      state.notification.status = 'success';
      state.isLoading = false;
      state.notification.show = true;
    },
    setError(state) {
      state.notification.message = 'Ocorreu um erro. Por favor, tente mais tarde!';
      state.notification.status = 'error';
      state.isLoading = false;
      state.notification.show = true;
    },
    showNotificaton(state) {
      state.notification.show = true
    },
    closeNotificaton(state) {
      state.notification.show = false
    },
    showFormHandler(state) {
      state.showForm = !state.showForm
    },
    setIsloading(state) {
      state.isLoading = !state.isLoading
    }
  }
});

export const uiActions = uiSlice.actions;