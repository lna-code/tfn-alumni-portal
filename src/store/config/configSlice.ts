import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { configStateType } from './configTypes';

const configDefaultState: configStateType = {
  appLoading: {
    state: false,
    text: ''
  },
  mobiNav: false,
  leftBar: false
};

export const configSlice = createSlice({
  name: 'config',
  initialState: configDefaultState,
  reducers: {
    setAppLoading: (state, action: PayloadAction<{ state: boolean; text?: string }>) => {
      state.appLoading = action.payload;
    },
    setMobiNav: (state, action: PayloadAction<boolean>) => {
      state.mobiNav = action.payload;
    },
    setLeftBar: (state, action: PayloadAction<boolean>) => {
      state.leftBar = action.payload;
    }
  }
});

export const { setAppLoading, setMobiNav, setLeftBar } = configSlice.actions;

export const selectConfigState = (state: RootState) => state.config;

export default configSlice.reducer;
