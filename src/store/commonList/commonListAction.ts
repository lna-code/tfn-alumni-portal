import { axiosInstance } from '@/api/axiosInstance';
import { apiErrorHandler } from '@/utils/helpers/ErrorHandlers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CommonListRequestPayload } from './commonListType';
import { commonListFailure, commonListRequest, commonListSuccess } from './commonListSlice';

export const getListAction = createAsyncThunk('common/getList', async ({ query, list }: CommonListRequestPayload, { rejectWithValue, dispatch }) => {
  try {
    dispatch(commonListRequest(list));
    const { data } = await axiosInstance.get(query);
    dispatch(commonListSuccess({ list, record: data?.data }));
    return data;
  } catch (error) {
    dispatch(commonListFailure({ list, error: apiErrorHandler(error) }));
    return rejectWithValue(apiErrorHandler(error));
  }
});
