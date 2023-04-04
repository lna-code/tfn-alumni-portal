import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import authReducer from './auth/authSlice';
import configReducer from './config/configSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persitAuth = { key: 'auth', storage };
const persistConfig = { key: 'config', whitelist: ['leftBar'], storage };

const allReducers = combineReducers({
  auth: persistReducer(persitAuth, authReducer),
  config: persistReducer(persistConfig, configReducer)
});

export const store = configureStore({
  reducer: allReducers,
  devTools: process.env.NODE_ENV === 'development'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
