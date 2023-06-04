import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import authReducer from './auth/authSlice';
import configReducer from './config/configSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import commonListReducer from './commonList/commonListSlice';

const persitAuth = { key: 'tfn_a', whitelist: ['token', 'isLoggedIn', 'user', 'changePasswordPage'], storage };
const persistConfig = { key: 'tfn_c', whitelist: ['leftBar'], storage };

const allReducers = combineReducers({
  auth: persistReducer(persitAuth, authReducer),
  config: persistReducer(persistConfig, configReducer),
  commonList: commonListReducer
});

const store = configureStore({
  reducer: allReducers,
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
