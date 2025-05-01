import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { RootState } from 'store';

import Build from '@mui/icons-material/Apartment';
import Movie from '@mui/icons-material/Movie';
import Person from '@mui/icons-material/Person';
import Schedule from '@mui/icons-material/Schedule';
import Clock from '@mui/icons-material/TimerOutlined';
import { Grid, Skeleton } from '@mui/material';

import styles from './movie-content.module.scss';

const RightSide = () => {
    const { isMovieLoading, movieDetails } = useSelector((state: RootState) => state.movies);
    const [search, setSearch] = useSearchParams();
    const genre = movieDetails?.Genre.split(',');

    return (
        <Grid size={{ xs: 12, md: 9 }}>
            <section className={styles.right}>
                {isMovieLoading ? (
                    <Skeleton variant='rectangular' height={50} />
                ) : (
                    <header>
                        {genre?.map(g => (
                            <div key={g} className={styles.genre}>
                                {g}
                            </div>
                        ))}
                        <div className={styles.flex}>
                            <div className={styles.info}>
                                <Clock />
                                {movieDetails?.Runtime}
                            </div>
                            <div className={styles.info}>
                                <Schedule />
                                {movieDetails?.Released}
                            </div>
                            <div className={styles.info}>
                                <Movie />
                                {movieDetails?.imdbID}
                            </div>
                        </div>
                        <div className={styles.flex}>
                            {!!movieDetails?.Season && <div className={styles.info}>Season {movieDetails?.Season}</div>}
                            {!!movieDetails?.Episode && (
                                <div className={styles.info}>Episode {movieDetails?.Episode}</div>
                            )}
                        </div>
                    </header>
                )}
                {isMovieLoading ? (
                    <Skeleton height='500px' variant='rectangular' sx={{ marginTop: 2 }} />
                ) : (
                    <section className={styles.synopsis}>
                        <h4>Synopsis</h4>
                        <p>{movieDetails?.Plot}</p>
                        <h4>Director</h4>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <div className={styles.director}>
                                    <div className={styles.icon}>
                                        <Person />
                                    </div>
                                    <div>
                                        <p>{movieDetails?.Director || '--'}</p>
                                        <p>Director</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <div className={styles.director}>
                                    <div className={styles.icon}>
                                        <Build />
                                    </div>
                                    <div>
                                        <p>{movieDetails?.Production || '--'}</p>
                                        <p>Production</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <div className={styles.director}>
                                    <div className={styles.icon}>
                                        <Build />
                                    </div>
                                    <div>
                                        <p>{movieDetails?.Writer || '--'}</p>
                                        <p>Writer</p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <h4>Cast</h4>
                        <p>{movieDetails?.Actors}</p>
                        <h4>Ratings</h4>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                                <div className={styles.rating}>
                                    <aside>{movieDetails?.imdbRating}</aside>
                                    IMDB Rating
                                </div>
                            </Grid>
                            {movieDetails?.Ratings.map(rating => (
                                <Grid key={rating.Source} size={{ xs: 12, md: 6, lg: 4 }}>
                                    <div className={styles.rating}>
                                        <aside>{rating.Value}</aside>
                                        {rating.Source}
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                        <h4>Additional Details</h4>
                        <div className={styles.additionalDetails}>
                            <div className={styles.row}>
                                <aside>Released</aside>
                                <p>{movieDetails?.Released}</p>
                            </div>
                            <div className={styles.row}>
                                <aside>Runtime</aside>
                                <p>{movieDetails?.Runtime}</p>
                            </div>
                            <div className={styles.row}>
                                <aside>Language</aside>
                                <p>{movieDetails?.Language}</p>
                            </div>
                            <div className={styles.row}>
                                <aside>Country</aside>
                                <p>{movieDetails?.Country}</p>
                            </div>
                            <div className={styles.row}>
                                <aside>Awards</aside>
                                <p>{movieDetails?.Awards}</p>
                            </div>
                            <div className={styles.row}>
                                <aside>Box Office</aside>
                                <p>{movieDetails?.BoxOffice}</p>
                            </div>
                        </div>
                        {movieDetails?.totalSeasons && +movieDetails.totalSeasons > 0 && (
                            <section className={styles.seasons}>
                                {Array.from({ length: +movieDetails.totalSeasons }, (_, i) => (
                                    <div
                                        key={i + 1}
                                        onClick={() =>
                                            setSearch({
                                                movieTitle: search.get('movieTitle') ?? '',
                                                Season: (i + 1).toString(),
                                            })
                                        }>
                                        Season {i + 1}
                                    </div>
                                ))}
                            </section>
                        )}
                    </section>
                )}
            </section>
        </Grid>
    );
};

export default RightSide;
