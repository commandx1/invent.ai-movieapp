import { Grid } from '@mui/material';

import LeftSide from './left-side';
import RightSide from './right-side';

import styles from './movie-content.module.scss';

const MovieContent = () => (
    <section className={styles.content}>
        <Grid container spacing={2}>
            <LeftSide />
            <RightSide />
        </Grid>
    </section>
);

export default MovieContent;
