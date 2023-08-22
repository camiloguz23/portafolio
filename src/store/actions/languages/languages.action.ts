import { createSlice } from '@reduxjs/toolkit';

const loadLanguage: string | null = typeof window !== 'undefined' ? localStorage.getItem('languages') : null;
const languageDefault = loadLanguage ?? 'en';

export const LanguagesSlice = createSlice({
  initialState: languageDefault,
  name: 'languages',
  reducers: {
    setLanguage: (state, action) => {
      localStorage.setItem('languages', action.payload);
      return action.payload;
    }
  }
});

export const { setLanguage } = LanguagesSlice.actions;
