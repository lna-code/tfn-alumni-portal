import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { configStateType } from './configTypes';

const configDefaultState: configStateType = {
  appLoading: true
};

export const configSlice = createSlice({
  name: 'config',
  initialState: configDefaultState,
  reducers: {
    setAppLoading: (state, action: PayloadAction<boolean>) => {
      state.appLoading = action.payload;
    }
  }
});

export const { setAppLoading } = configSlice.actions;

export const selectConfigState = (state: RootState) => state.config;

export default configSlice.reducer;
