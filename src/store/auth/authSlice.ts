import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { AuthStateObject, ChangePasswordPageEnum } from './authType';
import { ApiFailurePayload } from '../generalType';
import { pushNotification } from '@/utils/helpers/pushNotification';

const authDefaultState: AuthStateObject = {
  isLoggedIn: false,
  isLoading: false,
  token: '',
  message: '',
  error: '',
  user: {
    id: '',
    email: '',
    role: '',
    username: ''
  },
  changePasswordPage: ChangePasswordPageEnum.forget
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authDefaultState,
  reducers: {
    loginUserSuccess: (state, { payload }: PayloadAction<{ token: string; message: string; user?: any }>) => {
      const { message, token, user } = payload;
      pushNotification({ type: 'success', message });
      return { ...state, isLoggedIn: true, message, token, user: user };
    },
    loginUserFailure: (state, { payload }: PayloadAction<ApiFailurePayload>) => {
      const { error } = payload;
      return { ...state, isLoggedIn: false, token: '', error };
    },
    setChangePasswordPage: (state, { payload }: PayloadAction<ChangePasswordPageEnum>) => {
      if (payload === ChangePasswordPageEnum.login) {
        setTimeout(() => {
          window.location.assign('/auth/login');
        }, 4000);
        return { ...state, isLoggedIn: false, token: '', changePasswordPage: ChangePasswordPageEnum.forget };
      }
      return { ...state, isLoggedIn: false, token: '', changePasswordPage: payload };
    },
    forgotPasswordSuccess: (state, { payload }: PayloadAction<string>) => {
      return { ...state, isLoggedIn: false, token: '', user: { ...state.user, id: payload } };
    },
    logoutUser: (state) => {
      state = authDefaultState;
      return state;
    }
  }
});

export const { loginUserFailure, loginUserSuccess, logoutUser, setChangePasswordPage, forgotPasswordSuccess } = authSlice.actions;

export const selectAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;
