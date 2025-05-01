import { useSearchParams } from 'react-router-dom';

import { Card, Container } from '@mui/material';

import MovieList from 'components/movie-list';

import Banner from './banner';
import Breadcrumbs from './breadcrumbs';
import MovieContent from './movie-content';
import useFetchMovieDetails from './useFetchMovieDetails';

import styles from './movie.module.scss';

const Movie = () => {
    const [search] = useSearchParams();
    useFetchMovieDetails();

    return (
        <main className={styles.main}>
            <Container>
                <Breadcrumbs />
                <Card className={styles.card}>
                    {search.get('Season') && !search.get('Episode') ? (
                        <MovieList />
                    ) : (
                        <>
                            <Banner />
                            <MovieContent />
                        </>
                    )}
                </Card>
            </Container>
        </main>
    );
};

export default Movie;
