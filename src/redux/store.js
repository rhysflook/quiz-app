import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import tabReducer from './tabSlice';
import questionsReducer from './questionsSlice';
import accountReducer from './accountSlice';

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({tab: tabReducer,
    questions: questionsReducer,
    accounts: accountReducer}
)

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
});
