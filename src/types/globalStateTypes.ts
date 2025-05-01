import { TMovieDetails, TMovieItem } from './movieApiResponse';

type TMovieType = 'movie' | 'series' | 'all_content';

interface FilterState {
    searchTerm: string;
    currentPage: number;
    movieType: TMovieType;
    releaseYear: string | number;
}

interface SeasonDetails {
    Episodes: TMovieDetails[];
    Response: 'True' | 'False';
    Season: string;
    Title: string;
    totalSeasons: string;
}

interface MovieState {
    list: TMovieItem[];
    seasonDetails: SeasonDetails[] | null;
    episodeDetails: TMovieDetails | null;
    movieCount: number;
    listType: 'grid' | 'list';
    movieDetails: TMovieDetails;
    isListLoading: boolean;
    isMovieLoading: boolean;
}

export type { FilterState, MovieState, SeasonDetails, TMovieType };
