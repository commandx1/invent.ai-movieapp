import Container from '@mui/material/Container';

import HomeToolbar from 'components/home-toolbar';
import MovieList from 'components/movie-list';

import styles from './home.module.scss';

const Home = () => (
    <Container className={styles.home}>
        <HomeToolbar />
        <MovieList />
    </Container>
);

export default Home;
