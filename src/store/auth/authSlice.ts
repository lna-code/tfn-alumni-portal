import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { AuthStateObject, loginUserPayload } from './authType';

const authDefaultState: AuthStateObject = {
  isLoggedIn: false,
  token: '',
  user: {
    email: '',
    name: '',
    role: ''
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authDefaultState,
  reducers: {
    loginUser: (state, action: PayloadAction<loginUserPayload>) => {
      const { email } = action.payload;
      state.isLoggedIn = true;
      state.token = 'jcndsfkngdfsjgieorwjga98et9r2348ut98efhvds98E2349TR8GE';
      state.user = {
        email,
        name: email,
        role: 'user'
      };
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.token = '';
      state.user = {
        email: '',
        name: '',
        role: ''
      };
    }
  }
});

export const { loginUser, logoutUser } = authSlice.actions;

export const selectAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;
