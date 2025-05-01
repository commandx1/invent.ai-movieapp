import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import useFetchMovies from 'pages/home/useFetchMovies';
import { AppDispatch, RootState } from 'store';
import { setCurrentPage } from 'store/filterSlice';

import { Card, Pagination } from '@mui/material';

import ListContent from './list-content';
import ListHeader from './list-header';

import styles from './movie-list.module.scss';

const MovieList = () => {
    const {
        movies: { movieCount },
        filter: { currentPage },
    } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();

    useFetchMovies();

    return (
        <Card className={styles.main}>
            <ListHeader />
            <ListContent />
            <Pagination
                className={styles.pagination}
                count={Math.ceil(movieCount / 10)}
                variant='outlined'
                shape='rounded'
                page={currentPage}
                onChange={(_, page) => dispatch(setCurrentPage(page))}
            />
        </Card>
    );
};

export default MovieList;
