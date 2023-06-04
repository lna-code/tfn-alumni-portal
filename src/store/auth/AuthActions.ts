import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/api/axiosInstance';
import { apiErrorHandler } from '@/utils/helpers/ErrorHandlers';
import { ChangePasswordPageEnum, changePasswordRequestPayload, loginUserPayload } from './authType';
import { setAppLoading } from '../config/configSlice';
import { forgotPasswordSuccess, loginUserFailure, loginUserSuccess, setChangePasswordPage } from './authSlice';
import { pushNotification } from '@/utils/helpers/pushNotification';
import axios, { AxiosResponse } from 'axios';
import { BaseApiUrl } from '@/utils/constants/endpoints.constant';

export const loginUserRequest = createAsyncThunk('auth', async (payload: loginUserPayload, { rejectWithValue, dispatch }) => {
  dispatch(setAppLoading({ state: true, text: 'Login in user...' }));
  try {
    const res = await axiosInstance.post('/auth', payload);
    const { status, data } = res as AxiosResponse;
    const token = data?.data?.token.toString();
    if (status === 200 && data) {
      const user = await axios.get(`${BaseApiUrl}/auth`, { headers: { Authorization: `Bearer ${token}` } });
      const userName = user?.data?.data?.full_name;
      dispatch(setAppLoading({ state: false, text: '' }));
      dispatch(loginUserSuccess({ message: `Welcome ${userName || 'Fellow'}!`, token, user }));
      return data;
    }
    pushNotification({ type: 'error', message: 'An Error Occured! Please try again later.' });
  } catch (error) {
    dispatch(setAppLoading({ state: false, text: '' }));
    dispatch(loginUserFailure({ error: apiErrorHandler(error) }));
    return rejectWithValue(apiErrorHandler(error));
  }
});

export const changePasswordRequest = createAsyncThunk('auth', async ({ payload, type }: changePasswordRequestPayload, { rejectWithValue, dispatch }) => {
  dispatch(setAppLoading({ state: true, text: 'Resetting password..' }));
  let endpoint = 'reset-password';
  let successMsg = 'Password Reset Successful! Please Login.';

  switch (type) {
    case ChangePasswordPageEnum.verify:
      endpoint = 'forgot-password';
      successMsg = 'Please check email for verification code.';
      break;
    case ChangePasswordPageEnum.reset:
      endpoint = `verify-code?id=${payload?.id}&code=${payload?.password_reset_token}&action=PASSWORD_RESET`;
      successMsg = 'Please Enter new Password!';
      break;
    default:
      break;
  }

  console.log(payload);

  try {
    const res = await axiosInstance.put(`/auth/${endpoint}`, payload);
    const { status, data } = res as AxiosResponse;
    dispatch(setAppLoading({ state: false, text: '' }));
    const id = data?.data?.id;

    if (status === 200 && data) {
      pushNotification({ type: 'success', message: successMsg, clearPrev: true });
      dispatch(setChangePasswordPage(type));
      if (type === ChangePasswordPageEnum.verify) dispatch(forgotPasswordSuccess(id));
      return;
    }
    pushNotification({ type: 'error', message: 'An Error Occured! Please try again later.' });
  } catch (error) {
    dispatch(setAppLoading({ state: false, text: '' }));
    return rejectWithValue(apiErrorHandler(error));
  }
});
