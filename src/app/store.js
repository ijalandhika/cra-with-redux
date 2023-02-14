import { configureStore } from '@reduxjs/toolkit';
import personalDataReducer from '../features/data-collections/actions/dataSlice';

export const store = configureStore({
  reducer: {
    personalData: personalDataReducer,
  },
});
