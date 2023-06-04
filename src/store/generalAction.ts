import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAppLoading } from './config/configSlice';
import { axiosInstance } from '@/api/axiosInstance';
import { apiErrorHandler } from '@/utils/helpers/ErrorHandlers';
import { ApiRequestPayload } from './generalType';

export const getAction = createAsyncThunk('common/getAction', async ({ query, reload }: ApiRequestPayload, { rejectWithValue, dispatch }) => {
  if (reload?.state) dispatch(setAppLoading({ state: true, text: reload.text || 'loading...' }));
  try {
    const { data } = await axiosInstance.get(query);
    dispatch(setAppLoading({ state: false, text: '' }));
    return data;
  } catch (error) {
    dispatch(setAppLoading({ state: false, text: '' }));
    return rejectWithValue(apiErrorHandler(error));
  }
});

export const postAction = createAsyncThunk('common/postAction', async ({ query, payload, reload, headerConfig = {} }: ApiRequestPayload, { rejectWithValue, dispatch }) => {
  if (reload?.state) dispatch(setAppLoading({ state: true, text: reload.text || 'loading...' }));
  try {
    const { data } = await axiosInstance.post(query, payload, { headers: headerConfig });
    dispatch(setAppLoading({ state: false, text: '' }));
    const newData = data;
    return newData;
  } catch (error) {
    dispatch(setAppLoading({ state: false, text: '' }));
    return rejectWithValue(apiErrorHandler(error));
  }
});

export const deleteAction = createAsyncThunk('common/deleteAction', async ({ query, reload }: ApiRequestPayload, { rejectWithValue, dispatch }) => {
  if (reload?.state) dispatch(setAppLoading({ state: true, text: reload.text || 'loading...' }));
  try {
    const { data } = await axiosInstance.delete(query);
    dispatch(setAppLoading({ state: false, text: '' }));
    return data;
  } catch (error) {
    dispatch(setAppLoading({ state: false, text: '' }));
    return rejectWithValue(apiErrorHandler(error));
  }
});

export const patchAction = createAsyncThunk('common/patchAction', async ({ query, payload, reload, headerConfig = {} }: ApiRequestPayload, { rejectWithValue, dispatch }) => {
  if (reload?.state) dispatch(setAppLoading({ state: true, text: reload.text || 'loading...' }));
  try {
    const { data } = await axiosInstance.patch(query, payload, { headers: headerConfig });
    dispatch(setAppLoading({ state: false, text: '' }));
    return data;
  } catch (error) {
    dispatch(setAppLoading({ state: false, text: '' }));
    return rejectWithValue(apiErrorHandler(error));
  }
});
