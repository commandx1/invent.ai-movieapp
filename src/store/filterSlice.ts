import { FilterState, TMovieType } from 'types/globalStateTypes';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FilterState = {
    searchTerm: 'Pokemon',
    currentPage: 1,
    releaseYear: '',
    movieType: 'all_content',
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setMovieType: (state, action: PayloadAction<TMovieType>) => {
            state.movieType = action.payload;
        },
        setReleaseYear: (state, action: PayloadAction<string | number>) => {
            state.releaseYear = action.payload;
        },
    },
});

export const { setSearchTerm, setCurrentPage, setMovieType, setReleaseYear } = movieSlice.actions;
export default movieSlice.reducer;
