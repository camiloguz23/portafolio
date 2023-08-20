import { configureStore } from '@reduxjs/toolkit';
import { LanguagesSlice } from './actions';

const store = configureStore({
  reducer: {
    languages: LanguagesSlice.reducer
  }
});

export type StoreType = ReturnType<typeof store.getState>;

export default store;
