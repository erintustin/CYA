import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { resourcesReducer } from '../features/Resources/ResourcesSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    resources: resourcesReducer,
    user: userReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
