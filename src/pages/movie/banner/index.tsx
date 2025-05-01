import { useSelector } from 'react-redux';

import { RootState } from 'store';

import { Skeleton } from '@mui/material';

import styles from './banner.module.scss';

const Banner = () => {
    const { isMovieLoading, movieDetails } = useSelector((state: RootState) => state.movies);

    return (
        <section className={[styles.banner, !isMovieLoading && styles.loaded].filter(Boolean).join(' ')}>
            {isMovieLoading ? (
                <Skeleton height='100%' variant='rectangular' />
            ) : (
                <>
                    <img src={movieDetails?.Poster} alt={movieDetails?.Title} />
                    <h3>{movieDetails?.Title}</h3>
                </>
            )}
        </section>
    );
};

export default Banner;
