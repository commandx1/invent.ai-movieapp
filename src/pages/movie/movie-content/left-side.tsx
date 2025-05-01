import { useSelector } from 'react-redux';

import { RootState } from 'store';

import Favorite from '@mui/icons-material/Favorite';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Share from '@mui/icons-material/Share';
import { Grid } from '@mui/material';

import MovieSkeletons from './movie-skeletons';

import styles from './movie-content.module.scss';

const LeftSide = () => {
    const { movieDetails, isMovieLoading } = useSelector((state: RootState) => state.movies);

    return (
        <Grid size={{ xs: 12, md: 3 }}>
            {isMovieLoading ? (
                <MovieSkeletons />
            ) : (
                <aside className={styles.left}>
                    <div className={styles.imgBox}>
                        <div>
                            {movieDetails?.imdbRating} <br />
                            IMDB
                        </div>
                        <img src={movieDetails?.Poster} alt='poster' />
                    </div>
                    <button>
                        <PlayArrow />
                        Watch Trailer
                    </button>
                    <button>
                        <Favorite />
                        Add to Favorites
                    </button>
                    <button>
                        <Share />
                        Share
                    </button>
                </aside>
            )}
        </Grid>
    );
};

export default LeftSide;
