import { FC } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { TMovieItem } from 'types/movieApiResponse';
import getRandomInt from 'utils/getRandomInt';
import gradients from 'utils/gradients';

import { Card, Grid } from '@mui/material';

import styles from './list-content.module.scss';

const GridMovieCard: FC<{ movie: TMovieItem }> = ({ movie }) => {
    const [search] = useSearchParams();
    const Season = search.get('Season');

    const customStyle = Season ?
        {
            background: gradients[getRandomInt(0, 40)],
            color: '#fff',
            fontWeight: 600,
        } :
        {};

    const episodeLink = `${location.pathname}?movieTitle=${search.get('movieTitle')}&Season=${Season}&Episode=${
        movie?.Episode
    }`;

    const movieLink = `/${movie?.imdbID}`;

    return (
        <Grid key={movie?.imdbID} size={{ xs: 6, sm: 4, md: 3, lg: 2.4 }}>
            <Link to={Season ? episodeLink : movieLink}>
                <Card>
                    {
                        <div className={styles.imgBox} style={customStyle}>
                            {Season ? `Episode ${movie?.Episode}` : <img src={movie?.Poster} alt={movie?.Title} />}
                        </div>
                    }
                    <p>{movie?.Title}</p>
                    <footer>
                        <span>{movie?.Year || movie?.Released}</span>
                        <span>{movie?.imdbID}</span>
                    </footer>
                </Card>
            </Link>
        </Grid>
    );
};

export default GridMovieCard;
