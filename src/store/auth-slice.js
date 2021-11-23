import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
  isLoggedIn: localStorage.getItem('isLoggedIn') || false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      localStorage.setItem('token', state.token);
      localStorage.setItem('isLoggedIn', state.isLoggedIn);
    },
    logout(state, action) {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem('token');
      localStorage.removeItem('isLoggedIn');
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
