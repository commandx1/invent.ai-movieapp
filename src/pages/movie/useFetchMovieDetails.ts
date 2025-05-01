import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

import { fetchMovies } from 'services/fetchMovie';
import { setMovieDetails, setMovieLoading } from 'store/movieSlice';
import { TMovieDetails } from 'types/movieApiResponse';

const useFetchMovieDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [search, setSearch] = useSearchParams();

    const imdbId = params.imdbId;
    const Season = search.get('Season') ?? '';
    const Episode = search.get('Episode');
    const fetchDetails = async () => {
        if (!imdbId) { return; }

        const seasonFilter: Record<string, string> = Season ? { Season } : {};
        const episodeFilter: Record<string, string> = Episode ? { Episode } : {};

        try {
            dispatch(setMovieLoading(true));

            const res = (await fetchMovies({
                i: imdbId,
                plot: 'full',
                ...seasonFilter,
                ...episodeFilter,
            })) as TMovieDetails;

            if (res && res.Response === 'True') {
                dispatch(setMovieDetails(res));

                if (!Season && !Episode) {
                    setSearch({ movieTitle: res.Title });
                }
            }
        } catch (error) {
            alert((error as Error).message);
        } finally {
            dispatch(setMovieLoading(false));
        }
    };

    useEffect(() => {
        if (!Season || Episode) { fetchDetails(); }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Season, Episode]);
};

export default useFetchMovieDetails;
