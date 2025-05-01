import { useSelector } from 'react-redux';

import { RootState } from 'store';

import { Grid } from '@mui/material';

import GridMovieCard from './grid-movie-card';
import GridSkeleton from './grid-skeleton';

import styles from './list-content.module.scss';

const GridView = () => {
    const { list, isListLoading } = useSelector((state: RootState) => state.movies);

    return (
        <Grid container spacing={2} className={styles.movieList}>
            {isListLoading ? <GridSkeleton /> : list.map(movie => <GridMovieCard key={movie.imdbID} movie={movie} />)}
        </Grid>
    );
};

export default GridView;
