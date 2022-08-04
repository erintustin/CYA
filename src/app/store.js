import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { resourcesReducer } from '../features/Resources/ResourcesSlice';

export const store = configureStore({
  reducer: {
    resources: resourcesReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
