import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

import { fetchMovies } from 'services/fetchMovie';
import { RootState } from 'store';
import { setListLoading, setMovieList } from 'store/movieSlice';
import { FilterState } from 'types/globalStateTypes';
import { TMovieSuccessResponse } from 'types/movieApiResponse';

const useFetchMovies = () => {
    const filter = useSelector((state: RootState) => state.filter);
    const dispatch = useDispatch();
    const [search] = useSearchParams();
    const params = useParams();
    const Season = search.get('Season') ?? '';

    const fetchList = async (filter: FilterState, Season: string) => {
        if (filter.searchTerm.length === 0) { return; }

        try {
            dispatch(setListLoading(true));

            let query = { ...filter } as Record<string, string | number>;

            if (query.movieType && query.movieType !== 'all_content') {
                query.type = query.movieType;
            }

            if (query.releaseYear) {
                query.y = query.releaseYear;
            }

            if (query.searchTerm) {
                query.s = query.searchTerm;
            }

            if (query.currentPage) {
                query.page = query.currentPage;
            }

            delete query.movieType;
            delete query.releaseYear;
            delete query.searchTerm;
            delete query.currentPage;

            if (Season) {
                query = { Season, i: params.imdbId as string };
            }

            const res = (await fetchMovies(query)) as TMovieSuccessResponse;

            if (res.Response === 'True') {
                dispatch(setMovieList({ list: res.Search || res.Episodes, count: +res.totalResults || 0 }));
            }
        } catch (error) {
            alert((error as Error).message);
        } finally {
            dispatch(setListLoading(false));
        }
    };

    useEffect(() => {
        fetchList(filter, Season);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter, Season]);
};

export default useFetchMovies;
