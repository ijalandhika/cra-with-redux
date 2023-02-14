import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import personalDataReducer from '../features/data-collections/actions/dataSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    personalData: personalDataReducer,
  },
});
