import { TMovieDetails, TMovieFailedResponse, TMovieSuccessResponse } from 'types/movieApiResponse';

export async function fetchMovies(query: Record<string, string | number>) {
    const API_KEY = '5df1b049';
    const BASE_URL = 'https://www.omdbapi.com/';

    const searchParams = new URLSearchParams({ apikey: API_KEY, ...query });
    const url = `${BASE_URL}?${searchParams.toString()}`;

    const response = await fetch(url);
    const body: TMovieDetails | TMovieFailedResponse | TMovieSuccessResponse = await response.json();

    if (body && body.Response === 'False') {
        throw new Error(body.Error);
    }

    return body;
}
