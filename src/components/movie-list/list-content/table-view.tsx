import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { RootState } from 'store';
import getRandomInt from 'utils/getRandomInt';
import gradients from 'utils/gradients';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import styles from './list-content.module.scss';

const TableView = () => {
    const { list } = useSelector((state: RootState) => state.movies);

    const navigate = useNavigate();
    const location = useLocation();
    const [search] = useSearchParams();
    const Season = search.get('Season');

    const episodeLink = (episode: string) =>
        `${location.pathname}?movieTitle=${search.get('movieTitle')}&Season=${Season}&Episode=${episode}`;

    return (
        <TableContainer component={Paper} className={styles.tableContainer}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Poster</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Year</TableCell>
                        <TableCell>IMDB ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map(movie => (
                        <TableRow
                            key={movie.imdbID}
                            onClick={() => navigate(Season ? episodeLink(movie.Episode) : `/${movie.imdbID}`)}>
                            <TableCell
                                style={
                                    Season ?
                                        {
                                            background: gradients[getRandomInt(0, 40)],
                                            color: '#fff',
                                            fontWeight: 600,
                                        } :
                                        {}
                                }>
                                {Season ? (
                                    `Episode ${movie.Episode}`
                                ) : (
                                    <div className={styles.tableImgBox}>
                                        <img src={movie.Poster} alt={movie.Title} />
                                    </div>
                                )}
                            </TableCell>
                            <TableCell>{movie.Title}</TableCell>
                            <TableCell>{movie.Type}</TableCell>
                            <TableCell>{movie.Year}</TableCell>
                            <TableCell>{movie.imdbID}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableView;
