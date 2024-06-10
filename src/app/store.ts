import { configureStore } from '@reduxjs/toolkit';

import { buttonSlice } from '../components/buttons/buttonSlice';

export const store = configureStore({
  reducer: {
    page: buttonSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;