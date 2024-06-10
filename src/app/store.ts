import { configureStore } from "@reduxjs/toolkit";

import buttonSlice from "../features/buttons/buttonSlice";


export const store = configureStore({
    reducer:{
        page: buttonSlice

    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

