import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { DINES } from '../../app/shared/DINES';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchDines = createAsyncThunk(
  'dines/fetchDines',
  async () => {
    //sends req for campsite data to local json server instance
    const response = await fetch(baseUrl + 'dines');
    if (!response.ok) {
      return Promise.reject('Unable to fetch, status:' + response.status);
    }
    const data = await response.json();
    return data;
  }
);

const initialState = {
  dinesArray: [],
  isLoading: true,
  errMsg: ''
};

const dinesSlice = createSlice({
  name: 'dines',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDines.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchDines.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.dinesArray = mapImageURL(action.payload);
    },
    [fetchDines.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Fetch failed';
    }
  }
});

export const dinesReducer = dinesSlice.reducer;

export const selectAllDines = (state) => {
  return state.dines.dinesArray;
};

export const selectDineById = (id) => (state) => {
  return state.dines.dinesArray.find(
    (dine) => dine.id === parseInt(id));
};

export const selectFeaturedDine = (state) => {
  return state.dines.dinesArray.find((dine) => dine.featured);
};