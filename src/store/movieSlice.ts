import { MovieState, SeasonDetails } from 'types/globalStateTypes';
import { TMovieDetails, TMovieItem } from 'types/movieApiResponse';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: MovieState = {
    list: [],
    movieCount: 0,
    listType: 'grid',
    movieDetails: null,
    seasonDetails: null,
    episodeDetails: null,
    isListLoading: false,
    isMovieLoading: false,
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovieList: (state, action: PayloadAction<{ list: TMovieItem[]; count: number }>) => {
            state.list = action.payload.list;
            state.movieCount = action.payload.count;
        },
        setListType: (state, action: PayloadAction<'grid' | 'list'>) => {
            state.listType = action.payload;
        },
        setMovieDetails: (state, action: PayloadAction<TMovieDetails>) => {
            state.movieDetails = action.payload;
        },
        setSeasonDetails: (state, action: PayloadAction<SeasonDetails[]>) => {
            state.seasonDetails = action.payload;
        },
        setEpisodeDetails: (state, action: PayloadAction<TMovieDetails>) => {
            state.episodeDetails = action.payload;
        },
        setListLoading: (state, action: PayloadAction<boolean>) => {
            state.isListLoading = action.payload;

            if (action.payload) {
                state.list = [];
                state.movieCount = 0;
            }
        },
        setMovieLoading: (state, action: PayloadAction<boolean>) => {
            state.isMovieLoading = action.payload;

            if (action.payload) {
                state.movieDetails = null;
            }
        },
    },
});

export const {
    setMovieList,
    setListType,
    setMovieDetails,
    setSeasonDetails,
    setEpisodeDetails,
    setListLoading,
    setMovieLoading,
} = movieSlice.actions;
export default movieSlice.reducer;
