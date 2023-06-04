import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { CommonListFailurePayload, CommonlistStateProps } from './commonListType';
import { ListDefaultState, SingleRecordDefualtState } from '../generalType';

const commonListDefualt: CommonlistStateProps = {
  accounts: ListDefaultState,
  events: ListDefaultState,
  cohorts: ListDefaultState,
  oppurtunities: ListDefaultState,
  profiles: ListDefaultState,
  posts: ListDefaultState,
  currentProfile: SingleRecordDefualtState
};

export const commonListSlice = createSlice({
  name: 'commonList',
  initialState: commonListDefualt,
  reducers: {
    commonListRequest: (state, { payload }: PayloadAction<string>) => {
      switch (payload) {
        case 'accounts':
          state.accounts = { ...state.accounts, error: '', isLoading: true };
          break;
        case 'events':
          state.events = { ...state.events, error: '', isLoading: true };
          break;
        case 'cohorts':
          state.cohorts = { ...state.cohorts, error: '', isLoading: true };
          break;
        case 'oppurtunities':
          state.oppurtunities = { ...state.oppurtunities, error: '', isLoading: true };
          break;
        case 'profiles':
          state.profiles = { ...state.profiles, error: '', isLoading: true };
          break;
        case 'posts':
          state.posts = { ...state.posts, error: '', isLoading: true };
        case 'currentProfile':
          state.currentProfile = { ...state.currentProfile, error: '', isLoading: true };
          break;

        default:
          break;
      }
      return state;
    },
    commonListSuccess: (state, { payload }: PayloadAction<{ list: string; record: any }>) => {
      switch (payload.list) {
        case 'accounts':
          state.accounts = { ...state.accounts, error: '', isLoading: false, records: payload.record };
          break;
        case 'events':
          state.events = { ...state.events, error: '', isLoading: false, records: payload.record };
          break;
        case 'cohorts':
          state.cohorts = { ...state.cohorts, error: '', isLoading: false, records: payload.record };
          break;
        case 'oppurtunities':
          state.oppurtunities = { ...state.oppurtunities, error: '', isLoading: false, records: payload.record };
          break;
        case 'profiles':
          state.profiles = { ...state.profiles, error: '', isLoading: false, records: payload.record };
          break;
        case 'posts':
          state.posts = { ...state.posts, error: '', isLoading: false, records: payload.record };
        case 'currentProfile':
          state.currentProfile = { ...state.currentProfile, error: '', isLoading: false, record: payload.record };
          break;

        default:
          break;
      }
      return state;
    },
    commonListFailure: (state, { payload }: PayloadAction<CommonListFailurePayload>) => {
      switch (payload.list) {
        case 'accounts':
          state.accounts = { ...state.accounts, error: payload.error, isLoading: false, records: [] };
          break;
        case 'events':
          state.events = { ...state.events, error: payload.error, isLoading: false, records: [] };
          break;
        case 'cohorts':
          state.cohorts = { ...state.cohorts, error: payload.error, isLoading: false, records: [] };
          break;
        case 'oppurtunities':
          state.oppurtunities = { ...state.oppurtunities, error: payload.error, isLoading: false, records: [] };
          break;
        case 'profiles':
          state.profiles = { ...state.profiles, error: payload.error, isLoading: false, records: [] };
          break;
        case 'posts':
          state.posts = { ...state.posts, error: payload.error, isLoading: false, records: [] };
        case 'currentProfile':
          state.currentProfile = { ...state.currentProfile, error: payload.error, isLoading: false, record: {} };
          break;

        default:
          break;
      }
      return state;
    }
  }
});

export const { commonListFailure, commonListRequest, commonListSuccess } = commonListSlice.actions;

export const selectCommonListState = (state: RootState) => state.commonList;

export default commonListSlice.reducer;
