type TMovieItem = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: 'movie' | 'series';
    Poster: string;

    //season
    imdbRating: string;
    Released: string;
    Episode: string;
};

type TMovieSuccessResponse = {
    Search: TMovieItem[];
    Episodes: TMovieItem[];
    totalResults: string;
    Response: 'True';
};

type TMovieFailedResponse = {
    Response: 'False';
    Error: string;
};

type TMovieDetails = {
    Response: 'True' | 'False';
    Error: string;
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: { Source: string; Value: string }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Season: string;
    totalSeasons: string;
    Episode: string;
} | null;

export type { TMovieDetails, TMovieFailedResponse, TMovieItem, TMovieSuccessResponse };
