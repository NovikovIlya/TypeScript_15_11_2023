import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state, action:PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
