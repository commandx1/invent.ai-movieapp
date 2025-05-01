import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filterSlice';
import movieReducer from './movieSlice';

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        filter: filterReducer,
    },
});

// Tipler
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
