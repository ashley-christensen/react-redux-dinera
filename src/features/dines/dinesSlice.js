import { createSlice } from '@reduxjs/toolkit';
import { DINES } from '../../app/shared/DINES';

const initialState = {
 dinesArray: DINES
};

const dinesSlice = createSlice({
 name: 'dines',
 initialState
});

export const dinesReducer = dinesSlice.reducer;

export const selectAllDines = (state) => {
 return state.dines.dinesArray
};

export const selectDineById = (id) => (state) => {
 return state.dines.dinesArray.find(
  (dine) => dine.id === parseInt(id));
};

export const selectFeaturedDine = (state) => {
 return state.dines.dinesArray.find((dine) => dine.featured);
};