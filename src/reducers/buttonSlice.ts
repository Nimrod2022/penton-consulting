import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentPage } from '../shared/types';

const initialState = {
  page: CurrentPage.Home,
};

export const buttonSlice = createSlice({
  name: 'pageSetter',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<CurrentPage>) => {
      state.page = action.payload;
    },
  },
});

export const { setCurrentPage } = buttonSlice.actions;
export default buttonSlice;
